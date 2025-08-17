const qrText = document.getElementById("qr-text");
const sizes = document.getElementById("sizes");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const qrBody = document.querySelector(".qr-body");

const qrContainer = document.querySelector(".qr-body");
let size = sizes.value;


generateBtn.addEventListener("click", (e) => {
    e.preventDefault();
   isEmptyInput();
});

sizes.addEventListener("change", (e) => {
    size = e.target.value;
    isEmptyInput();
    
});

function isEmptyInput(){
    if(qrText.value.length > 0){
        generateQRCode();
    }
    else{
        alert("Please enter a valid text or URL");      
    }
}

downloadBtn.addEventListener("click", (e) => {
    // If there's no generated QR, block download and inform the user
    let img = document.querySelector(".qr-body img");
    const canvas = document.querySelector('canvas');
    if (!img && !canvas) {
        e.preventDefault();
        alert('Please generate a QR code first.');
        return;
    }

    // Point the anchor to the image data (img src or canvas data) and set filename.
    if (img) {
        const imgAttr = img.getAttribute('src');
        downloadBtn.setAttribute('href', imgAttr);
    } else {
        downloadBtn.setAttribute('href', canvas.toDataURL('image/png'));
    }
    downloadBtn.setAttribute('download', `QR_Code_${size || '300'}.png`);
    // Do NOT call preventDefault() here - allow the anchor to navigate and trigger download.
});

function generateQRCode(){
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",
    });
}