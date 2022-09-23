// session storage tanımından başlamak gerekirse:Sessşion anlamı zaten oturum anlamına geliyor. Browserımız açık kaldığı sürece
// session storage de depoladığımız veriler kalır. ancak sekme kapanır yada browser kapanırsa veriler silinir
// browserımızın application kısmına gelindiğinde session storage de key ve value değerleri ile veriler(depolanır)
// key olarak örneğin meyve diyebiliriz value ise kiraz elma gibi şeyler olabilir.



//cookies ise mesela beni hatırla gibi bazı login işlemlerinde bilgilerin otomatik gelmesinde kullanılır ve tarayıcıya
//izin verilmesi gerekilir. bu bilgiler kullanıcının bilgileri yani ,veritabanında saklanıldığını var sayarsak ve
//beni hatırla gibi bir seçenek kullanmak istersek bunu yapamayız çünkü veri tabanından veriyi çekmek için login olunması
// gerekiyor. oyüzden bu bilgiler tarayıcının belleğinde depolanır.



///SESSİON STORAGE
//butonları seçelim
const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");



//cookie gösterim için html içerisinde bir p tagı açtım ve gireceğim değeri orada göstereceğim
var p = document.querySelector("p");



//inputları seçelim

const addkey = document.querySelector("#addkey");
const addvalue = document.querySelector("#addvalue");
const deletekey = document.querySelector("#deletekey");

// Buton yönlendirmeleri click olayı olduğundan tanımlanması gerekiyor
add.addEventListener("click", addItem);


//setItem methodu bu şekilde formda girilen bir veriyi session storgeye yazdırabildik.
function addItem(e) {
    sessionStorage.setItem(addkey.value, addvalue.value);

    //çektiğimiz veriyi get ile gösterdik get methodu da bu şekilde kullanılır.

    const keyvalue = sessionStorage.getItem(addvalue.value);
    console.log({keyvalue});

//yukarda yapmış olduğum işlemi güncel olarak kullanmaktayım , bunu PHP LARAVEL kütüphanesinde bazı güvenlik açıklarını
//gidermek adına yapıyorum.


//cookies

// html taglarından p etiketi içerisine yazılan key and value ifadelerini gösterme işlemi yapıldı buraya bir tarih atanıp
// experies ile bunu belirtebilirdik bunuda farklı bir fonksiyonda yapabilirdik.
    p.innerHTML = "key =" + addkey.value + " , value =" + addvalue.value;
    document.cookie = "key =" + addkey.value + " , value =" + addvalue.value+ new Date(9999,0,1).toUTCString();
}








