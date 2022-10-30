import Hero from "./Hero";
import Cardgallery from "./Cardgallery";
import Gallery1 from "./../assets/gallery1.jpg";
import Gallery2 from "./../assets/gallery2.jpg";
import Gallery3 from "./../assets/gallery3.jpg";
import Cardkegiatan from "./Cardkegiatan";
import Kegiatan1 from "./../assets/kegiatan1.jpg";
import Kegiatan2 from "./../assets/kegiatan2.jpg";
import Kegiatan3 from "./../assets/kegiatan3.jpg";


const Maincontent = () =>{
    return (
        <div>
            <Hero/>
            <div className="container mx-auto">
                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1 id="Gallery">Gallery</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-12" >
                    <Cardgallery image={Gallery1} judul = "Baris Gede" deskripsi = "Ngayah ngigel Baris Gede ring Pura Puseh lan Baleagung edisi mecaru Rsi Gana lan mendem pedagingan"/>
                    </div>
                    <div className="col-lg-4 col-12">
                    <Cardgallery image={Gallery2} judul = "Seka Gong" deskripsi = "Ngayah Baleganjur ring Pura Prajapati, mecaru Rsi Gana lan mendem pedagingan"/>
                    </div>
                    <div className="col-lg-4 col-12">
                    <Cardgallery image={Gallery3} judul = "Rejang Sari" deskripsi = "Ngayah ngigel Rejang Sari edisi mecaru Rsi Gana lan mendem pedagingan"/>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1>Kegiatan</h1>
                    </div>
                    <div className="col-12 my-3">
                    <Cardkegiatan image={Kegiatan1} deskripsi = "21 Mei 2022 - Melakukan gotong royong pembuatan penjor"/>
                    </div>
                    <div className="col-12 my-3">
                    <Cardkegiatan image={Kegiatan3} deskripsi = "28 November 2021 - Melakukan gotong royong bersih - bersih pantai serta ber partisipasi melakukan penanaman 10.000 pohon"/>
                    </div>
                    <div className="col-12 my-3">
                    <Cardkegiatan image={Kegiatan2} deskripsi = "17 Agustus 2019 - Ikut serta membantu kegiatan pelepasan tukik di pantai tegal besar"/>
                    </div>
                    
                </div>
            </div>
        </div>
    
    );
}

export default Maincontent;