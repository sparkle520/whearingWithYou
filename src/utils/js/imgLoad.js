export  const imgLoad = (srcList) =>{
    let imgCount = srcList.length;
    let imgLoadCount = 0;
    for (let i = 0; i < srcList.length; i++) {
        const img = new Image();
        img.src = srcList[i];
        img.onload = () => {
            imgLoadCount++;
            if (imgLoadCount === imgCount) {
                return true;
            }
        }
    }
   
};
