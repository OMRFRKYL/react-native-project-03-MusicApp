

Proje Adı: react-native-project-03-MusicApp

--* Projenin Amacı: --*

-Projemiz kapsamında statik olan ürünlerimizi mobil ekran üzerine yansıtmak.
-Eğitimin seviyesine göre başlangıç aşamasında olan bu proje kapsamında sadece ürünler sabit değerlerle gösterilmektedir.
-Oluşturulan "searchBar" sayesinde filtreleme yapark istenilen müzik ön plana çıkarılabilir.

--* Yapılan İşlemler --*

İlk olarak projemizi "npx react-native init MusicApp" komutu ile oluşturduk ve "npm start" komutuyla projemizi başlattık.
Emülatörümüzü aktif etmek için ayrı bir terminalde "npm run android" komutumuzu kullandık.
data.json dosyamızın içerisine sergileyeceğimiz albümleri oluşturduk.
Component mimarisi sayesinde SongCard.js ve SongCard.style.js dosyalarımızı oluşturduk.
App.js üzerinden datamızı import ettik ve daha sonra oluşturduğumuz "SongCard.js" dosyamıza "props" aracılığıyla verilerimizi aktardık.
Karşılanan veri SongCard.js dosyamızda farklı başlıklar altında sergilendi.
Stillendirme işlemlerimizi harici olarak "SongCard.style.js" dosyamızda yaparak export ettik ve gerekli yerde import ederek kullandık.
SearchBar oluşturmak için harici bir dosya kullandık ve app.jsde import ederek kullandık.
SearchBar fonksiyonelliği için textınput propertysi olan "OnChangeText" kullanılarak değişen ınputu yakaladık.
Değerleri useState() ile tuttuk ve setState 'i ile güncelleyerek filtrelenmiş halini sergiledik.

--* Akılda Kalması Gerekenler --*

FlatList öğeleri kaydırılabilir bir liste görünümünde oluşturmak için kullanılır. -renderItem() ve data() zorunlu iki propertysidir. -Projedede kullandığımız üzere numColumns=() sayesinde birden fazla sütün kullanabiliriz. -ListHeaderComponent propertysi sayesinde flatlist() in en üstüne kullanmak istediğimiz componenti yada başlığı tercih edebiliriz. -keyExtractor() sayesinde unıque(benzersiz) bir key(id) oluşturmamızı sağlar.

SearchBar oluşumunda TextInput() hazır componentini kullandık. 
-placeholder() özelliği sayesinde searchbar üzerinde görünmesini istediğimiz text yazarız.
-onChangeText() özelliğisayesinde ınput alanında oluşan değişiklerin tespiti için kulladık.





Projemizin görseli aşağıda mevcuttur.İYİ SEYİRLER ... :):):)

https://user-images.githubusercontent.com/93818418/203585958-c3d25824-9e0d-4325-8991-de38448c4846.mp4
