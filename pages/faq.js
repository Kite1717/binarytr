import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

const FAQ = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="AYDINLATMA METİNLERİ" />

            <div className="faq-area ptb-80">
                <div className="container">
                    <div className="faq-accordion">
                        <Accordion allowZeroExpanded preExpanded={['a']}>
                            <AccordionItem uuid="a">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                           Risk Beyanı
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Müşteri aşağıdakilerin tam olarak doğruluğunu kabul eder:
                                        - İşlemlerin finansal araçlarla yapılmasına önemli riskler eşlik eder. Şirketin hizmetlerini kullanmadan önce, Müşterinin finansal yeteneklerini analiz etmesi gerekir;
                                        Küresel piyasalarda yapacağınız işlemler sonucunda kar elde edebileceğiniz gibi zarar riskiniz de bulunmaktadır. Bu nedenle, işlem yapmaya karar vermeden önce, piyasada karşılaşabileceğiniz riskleri anlamanız, mali durumunuzu ve kısıtlarınızı dikkate alarak karar vermeniz gerekmektedir.
                                        - İşlem Platformu aracılığıyla gerçekleştirilen İşlemler, resmi bir borsada yapılan işlem değildir. Bunar OTC (tezgah üstü) işlemlerdir ve bu nedenle Müşteri için resmi borsa işlemlerinden daha büyük risk taşırlar;
                                        - Web sitesinde, Şirket temsilcilerinden veya ortaklarından aldıkları hiçbir bilgi ve/veya öneri, bir İşlemi veya finansal işlem yapmak için doğrudan bir teklif olarak değerlendirilmez;
                                        - Müşteri, bilgisayar donanımının, yazılımın, istikrarsız bir internet bağlantısının, elektrik kesintilerinin veya diğer teknik faktörlerin çalışmasındaki aksaklık ve/veya arızaların sonucu olarak finansal kayıplara uğrayabilir;
                                        - Normal dışındaki piyasa koşullarında, Müşterinin İşlem Emrinin işleme süresi uzatılabilir, bunun sonucunda da Müşteri zarara uğrayabilir. Ek olarak, Fiyatlardaki keskin dalgalanmalar, İşlem Platformunda görüntülenen Fiyattan farklı bir Fiyatta İşlem gerçekleştirildiğinde Müşteri kayıplarına neden olabilir.
                                        Müşteri, Hizmetleri kullandığı esnada herhangi bir miktarda kazanç elde edeceğine veya zararı olmayacağına dair Şirketin garanti vermediğini kabul eder.
                                        Şirket bir kredi kurumu değildir, bankacılık faaliyeti yapmaz, belirli bir süre içinde faizle yatırım yapmak amacıyla bireylerden para çekmez ve banka hesabı açmaz veya tutmaz.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="b">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            AML ve KYC Politikası
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Bir Hesaptan Para Çekme işleminde Kara Para Aklama ile Mücadeleye (Kara Para Aklamayı Önleme, AML) ilişkin uluslararası mevzuata uymak için Şirket, Müşteriden Para Çekmenin yapıldığı hesabın Müşteriye ait olduğunu doğrulama talebinde bulunma, ayrıca Müşterinin kimliğini, ikamet ettiği yeri ve kayıt yerini kanıtlayan belgelerin noter tasdikli, gerekirse, apostile edilmiş/yasallaştırılmış kopyalarını isteme hakkına sahiptir.
                                        Müşteri tarafından gerekçe sunulmadan bu belgelerin sağlanmasının reddedilmesi durumunda, Şirket Para Çekme işlemini reddetme hakkına sahiptir.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="c">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            Gizlilik Politikası
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Müşteri, Web Sitesindeki Hesaplarına erişmek için kullandığı giriş bilgilerinden ve parolalardan şahsen sorumludur. Müşteri, Web Sitesindeki Hesabına üçüncü tarafların erişmelerini engellemekle yükümlüdür. Giriş bilgilerine ve şifreye ve/veya Müşterinin Hesabına yetkisiz erişim olması durumunda, Müşteri derhal Şirketi bilgilendirmek zorundadır. Müşterinin Hesaba erişimini geri yükleme süreci ile ilişkili riskleri ve zararları, Müşterinin Hesabın sahibi olarak ek tanımlamayı geçtikten sonra Hesaba erişimi için yeni veriler sağlamanın dışında Şirket için ek yükümlülükler getirmez. Şirket, Müşterinin Hesabına yetkisiz erişime bağlı olarak herhangi bir zararı telafi etmek veya Müşteriye kazanç sağlamakla yükümlü değildir.
                                        Şirket, bilgisayar korsanı saldırıları, bilgisayar ekipmanı aksaklıkları (hem Müşteriye hem de Şirkete) veya Şirketin hatası olmaksızın iletişim kanalları aracılığıyla gerçekleşen veri iletimi sonucu meydana gelen Müşteri zararları da dahil olmak üzere yükümlülüklerini yerine getirememekten dolayı sorumlu olmayacaktır.
                                        Şirket, mücbir sebeplerden kaynaklanan Müşteri zararlarından sorumlu olmayacaktır.
                                        Mücbir sebepler arasında şunlar yer alır: doğal afetler, insan kaynaklı kazalar, askeri eylemler, terör eylemleri, isyanlar, huzursuzluk, grevler, isyanlar, bu Sözleşmenin yerine getirilmesini etkileyen hükümet kısıtlamalarının getirilmesi, piyasa ve/veya döviz kurallarının uygulamaya konması (değişimin), ve borsa işlemlerinin askıya alınması. Müşterinin bu Sözleşmenin şartlarını ihlal etmesi durumunda, Şirketin Müşteriye önceden bildirmeden bu Sözleşmeyi tek taraflı feshetme hakkı vardır. Aynı zamanda, Şirket, Müşterinin bu Sözleşmeye aykırı olarak elde ettiği kazancın yanı sıra Müşterinin eylemleri yoluyla Şirketi uğrattığı fiili zarar tutarında Hesabındaki paraları durdurma hakkına sahiptir. Şirket, bu Müşteriyi tekrar kaydetmeyi reddetme hakkına sahiptir. Bu durumda, Müşteri Hesabının bakiyesi, kayıt sırasında sağlanan ödeme bilgileri kullanılarak aktarılabilir ve Şirket, Müşteri'nin Hesabından şunların herhangi bir miktarını düşebilir; i) Müşterinin herhangi bir eylemi nedeniyle Şirketin maruz kaldığı fiili zararlar ve ii) Müşteri tarafından bu Sözleşmenin ihlali yoluyla elde edilen kârlar. Şirket, bu Müşterinin yeni bir kaydını reddedebilir. Müşterinin iletişim bilgileri, Web Sitesine kayıt olurken belirttiği e-posta adresinin yanı sıra, Müşteri belirtmek isterse Şirket Web Sitesinde Kişisel Hesabında yer alan telefon numarasını ifade eder.
                                        Şirket, Web sitesinde Müşterinin iletişim bilgilerinin yanlış şekilde gösterilmesinden sorumlu değildir
                                        Şirket herhangi bir zamanda bu Sözleşmede değişiklik yapma yetkisine sahiptir.
                                        Sözleşmede değişiklik yapılması durumunda, değişikliklerin yürürlüğe girmesi için farklı bir şart belirtilmediği sürece, Sözleşmenin değiştirilmiş metni Web Sitesinde sekizfx.com adresinde yayınlandığı andan itibaren yürürlüğe girecektir. Müşteri, Sitede yayınlanan Sözleşmenin güncel versiyonu hakkında bağımsız olarak bilgi edinmekle yükümlüdür. Müşteri, Sözleşmenin değiştirilmiş versiyonunu kabul etmiyorsa Şirket hizmetlerini kullanmayı bırakmalı ve Hesaplarını Web Sitesindeki Kişisel Hesap arayüzü ile veya önce hesabından bir Para Çekme işlemi yaptıktan sonra bu Sözleşme de belirtilen iletişim bilgilerini kullanarak Şirket Müşteri Destek Servisi ile iletişime geçerek engellemelidir.
                                        Bu Sözleşme aşağıdaki gibi sonlandırılabilir:
                                        - Herhangi bir Tarafın girişiminde;
                                        - Müşterinin ölümü veya yasal ehliyetsizliğinin onaylanması durumunda;
                                        - Şirketin tasfiyesi halinde.
                                        Sözleşmenin feshedilmesine ilişkin esas ne olursa olsun, Şirket, Müşteriye karşı yükümlülüklerini bu Sözleşmede öngörüldüğü şekilde yerine getirmeyi taahhüt eder
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                           {/* <AccordionItem uuid="d">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            Can I share resources between features?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="e">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            Is multidex supported for instant apps?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="f">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            Can I share resources between features?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>*/}
                        </Accordion>
                    </div>

                   {/* <div className="faq-contact">
                        <h3>Ask Your Question</h3>
                        <form>
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input type="text" placeholder="Name" className="form-control" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input type="email" placeholder="Email" className="form-control" />
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <input type="text" placeholder="Subject" className="form-control" />
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <textarea name="message" cols="30" rows="6" placeholder="Message" className="form-control"></textarea>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <button className="btn btn-primary" type="submit">Submit Now!</button>
                                </div>
                            </div>
                        </form>
                    </div>*/}
                </div>
            </div>

            <Footer />
        </>
    )
}

export default FAQ;
