import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function About() {
  return (
    <div className="grid grid-rows-[auto_auto] h-full px-4 pt-4 pb-2 md:px-8 md:pt-6 md:pb-4">
      <Header title="O autorovi" active={1} />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden gap-5">
        <div className="w-full md:aspect-auto aspect-video relative rounded-md ">
          <Image
            src="/static/system/profile.jpg"
            layout="fill"
            className="h-full w-full rounded-md"
            objectFit="cover"
            alt=""
          />
        </div>
        <div className="overflow-y-auto bg-gray-50 rounded-md">
          <div className="prose overflow-hidden p-5 mx-auto font-barlow font-light text-slate-800">
            <p>
              Zapamatujete si ho, nedá se přehlédnout. Je to ten trochu
              excentrický chlápek s vousy a foťákem. Všude, kde se něco děje
              kolem Bigg Boss klanu nesmí chybět. Jenže se nenechte mýlit.
            </p>
            <p>
              Před objektivy Františka Ortmanna stala třeba i česká pub-rocková
              kapela Kabát, nesmrtelný seladon Karel Gott, nebo velikán
              celosvětového rocku Bruce Springsteen. Říká se, nevěřte nikomu,
              komu je přes třicet. František je ročník 67, přesto má respekt u o
              generaci mladších lidí, kteří se motají kolem fotky a muziky.
              Možná i o dvě generace.
            </p>
            <p>
              František Ortmann je také držitelem několika ocenění Czech Press
              Photo. Poslední získal v roce 2010 za první místo Zlaté oko v
              kategorii Lidé, o nichž se mluví. Měl samostatnou retrospektivní
              výstavu portrétů ve Sbírce moderního umění Národní galerie. Řadí
              se k obecně nejmladším, samostatně vystavujícím fotografům v
              Národní galerii vůbec.
            </p>
            <p>
              Je autorem více než čtyřseti titulních stran v mnoha magazínech. V
              posledních letech se zaměřuje převážně na studiovou fotografii. Z
              jeho fotoaparátu spatřily světlo světa monografie mnoha osobností.
              Velmi podstatnou část zaujímá v jeho profesním životě fotografie
              divadelní. Exkluzivně fotograficky zaznamenal muzikály Monte
              Cristo a Johanka z Arku.
            </p>
            <p>
              Na půdě Státní opery Praha fotografoval inscenace jako je Polský
              žid, Adriana a Modrovous, La Traviata, Aida, Don Giovanni, Cirkus
              Terra, Sloní muž, balety Hamlet i Novosvětská a řadu dalších. V
              roce 2006 vydalo Národní divadlo publikaci Ring, fotografickou
              retrospektivu projektu Prsten Nibelunguv, kde František uveřejnil
              mnoho ze svých fotografií a získal za ně významné ocenění od GIP.
            </p>
            <p>
              Uspořádal výstavu s názvem Hoši děkujem - fotografie vítězných
              hokejistů z Nagana, jejíž výtěžek v řádu settisíc předal českým
              paraolympionikům. Podílel se i na vydání knihy receptů Tajemství
              nejlepších šéfkuchařů, kterou sestavil vyhlášený gurmán Pavel
              Maurer a právě díky Ortmannovi můžeme vidět kulinářské umění
              dvaceti nejvyhlášenějších šéfkuchařů v České republice. V této
              oblasti úzce spolupracoval s magazínem Bar Life.
            </p>
            <p>
              Věnuje se také módní fotografii i kampaním pro bezpočet českých
              značek. Pořád se ti to zdá málo? Není, ale přesto - myšlenku
              vytvořit projekt zabývající se tetováním nazvaný Tattoo Names
              nosil František Ortmann v hlavě dlouho. Od zdánlivě povrchního
              obdivování tetování u svých kamarádů a známých přišel až k
              myšlence pátrání a dokumentování důvodů a pohnutek, které je vedly
              k nevratnému kroku ocejchování kůže. Impulzem prý byl čas strávený
              s kamarádem Lukášem Černým, majitelem
            </p>
            <p>
              alternativního vlasového studia Joshua v době, kdy byl František
              po banálním úrazu připoután několik měsíců na invalidní vozík a
              Lukáš se o něj staral. Nemohl si nevšimnout toho, s jakým
              despektem a mnohdy opovržením se na Lukáše často dívají konvenční
              “slušní” lidé. Od toho nebylo příliš daleko k realizování
              projektu, jehož cílem bylo odtabuizovat tetování jako něco, co je
              dobré tak leda pro lůzu a kriminálníky.
            </p>
            <p>
              Právě i pro svůj postoj vůči těmto věcem se František Ortmann stal
              jedním z rezidentů Galerie NE, galerie odvážných lidí, kteří se
              nebojí vyjádřit nesouhlas s tím, co ostatní mají za samozřejmé,
              nepřitakávají tupě maistreamovým názorům, nenechají se snadno
              zlomit, ani si nevybírají tu nejjednodušší cestu. Ano, i to (a
              především) je František Ortmann; fotograf, umělec, kreativní mozek
              i obyčejný kamarád.
            </p>
            <p className="text-right italic text-sm">
              Text: Kay Buriánek
              <br />
              Foto: Veronika Rose
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
