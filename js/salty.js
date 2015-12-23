/*
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var digits = '0123456789';
var hexDigits = '0123456789abcdef';
var specials = '~!@#$%^&*()_+=-`[]{};\'\\:"|,./<>?"';
var allChars = lowercase+uppercase+digits+specials;
*/

function doHash(pass){
    var h = sjcl.codec.hex.fromBits(sjcl.hash.sha256.hash(pass));
    console.log(h);
    var bi = str2bigInt(h.substring(0,16), 16);
    return bigInt2str(bi, 95);
}

function makePass(){
    document.getElementById('input-generated-password').value =  doHash(document.forms['passform']['base'].value +document.forms['passform']['salt'].value);
}

window.onload = function(){
  document.forms['passform']['base'].focus();
  document.forms['passform'].onkeypress = function(event){
    setTimeout(makePass);
  };  
};