function myalert() {
    //get Value of inputed form
    document.getElementById('wrap2').style.display = "block";
    var nama = document.getElementById('myname').value;
    var nrp = document.getElementById('mynrp').value;
    var kelas = document.getElementById('mykelas').value;
    var kelamin = document.querySelector('input[name="kelamin"]:checked').value;
    var agama = document.getElementById('agama').value;
    var tgllahir = document.getElementById('Tgl').value;
    var alamat = document.getElementById('alamat').value;
    var sd = document.getElementById('sd').value;
    var smp = document.getElementById('smp').value;
    var smk = document.getElementById('smk').value;
    var mail = document.getElementById('mail').value;
    var homepage = document.getElementById('homepage').value;
    var hobby = document.getElementById('hobby').value;

    //create new array
    var myarray = new Array();
    //membuat element 
    var divcheckbox = document.getElementById('formcheckbox');
    //mendapatkan child dari element dengan tag
    var checkboxinform = divcheckbox.getElementsByTagName('input');
    //loop mengisi push array
    for (var i = 0; i < checkboxinform.length; i++) {
        if (checkboxinform[i].checked) {
            myarray.push(checkboxinform[i].value);
        }
    }
    //get reciver
    var printnama = document.getElementById('printednama');
    var printnrp = document.getElementById('printednrp');
    var printkelas = document.getElementById('printedkelas');
    var printkelamin = document.getElementById('printedkelamin');
    var printagama = document.getElementById('printedagama');
    var printlahir = document.getElementById('printedlahir');
    var printalamat = document.getElementById('printedalamat');
    var printsd = document.getElementById('printedsd');
    var printsmp = document.getElementById('printedsmp');
    var printsmk = document.getElementById('printedsmk');
    var printmail = document.getElementById('printedmail');
    var printhomepage = document.getElementById('printedhomepage');
    var printhobby = document.getElementById('printedhobby');
    var printinterest = document.getElementById('printedinterest');
    if (nama.length > 0) { //jika inputan nama panjang lebih dari 1 maka submit
        document.getElementById("validationform").reset(); //JS DOM Reset
        alert("Thanks for Submiting The Form " + nama);
        //printing afte submit
        printnama.innerHTML = "Nama: " + nama;
        printnrp.innerHTML = "NRP: " + nrp;
        printkelas.innerHTML = "Kelas: " + kelas;
        printkelamin.innerHTML = "Jenis Kelamin: " + kelamin;
        printagama.innerHTML = "Agama: " + agama;
        printlahir.innerHTML = "Tempat/Tanggal Lahir: " + tgllahir;
        printalamat.innerHTML = "Alamat: " + alamat;
        printsd.innerHTML = "SD: " + sd;
        printsmp.innerHTML = "SMP: " + smp;
        printsmk.innerHTML = "SMK: " + smk;
        printmail.innerHTML = "Email: " + mail;
        printhomepage.innerHTML = "Homepage: " + homepage;
        printhobby.innerHTML = "Hobby: " + hobby;
        printinterest.innerHTML = "Interest: " + myarray.join(",");

    } else alert("Please Fill the Form")

}
function resetalert() {
    var printnama = document.getElementById('printednama');
    var printnrp = document.getElementById('printednrp');
    var printkelas = document.getElementById('printedkelas');
    var printkelamin = document.getElementById('printedkelamin');
    var printagama = document.getElementById('printedagama');
    var printlahir = document.getElementById('printedlahir');
    var printalamat = document.getElementById('printedalamat');
    var printsd = document.getElementById('printedsd');
    var printsmp = document.getElementById('printedsmp');
    var printsmk = document.getElementById('printedsmk');
    var printmail = document.getElementById('printedmail');
    var printhomepage = document.getElementById('printedhomepage');
    var printhobby = document.getElementById('printedhobby');
    var printinterest = document.getElementById('printedinterest');

    printnama.innerHTML = null;
    printnrp.innerHTML = null;
    printkelas.innerHTML = null;
    printkelamin.innerHTML = null;
    printagama.innerHTML = null;
    printlahir.innerHTML = null;
    printalamat.innerHTML = null;
    printsd.innerHTML = null;
    printsmp.innerHTML = null;
    printsmk.innerHTML = null;
    printmail.innerHTML = null;
    printhomepage.innerHTML = null;
    printhobby.innerHTML = null;
    printinterest.innerHTML = "Interest: " + myarray.join(",");
    alert("Form has Been Reseted!");
}
//get the date
var today = new Date();
var date = today.getFullYear();
document.getElementById("date").innerHTML = date;

//Get Modal
var modal = document.getElementById("myModal");

//get Btn id untuk membuka modaal
var btn = document.getElementById("myBtn");

//span element x di pojok nanti
var span = document.getElementsByClassName("close")[0];

//functions tarter
btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

//js event listener
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}