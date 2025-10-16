import styles from "./page.module.css";
import Button from "@/components/Button";
import Hero from "@/components/Hero";
import Image from "next/image";
import Content from "./HomepageComponents/content";
import Input from "@/components/input";
import Editor_card from "./HomepageComponents/Editor_card";
import Place from "./HomepageComponents/place";
import PublishCard from "./HomepageComponents/PublishCard";
import Storecard from "./HomepageComponents/Storecard";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.top}>
        <Hero src='/Homepage_cover.jpg' alt='Dowload our App' />
      </div>
      <div className={styles.downloadButton}>
        <p className={styles.main_heading}>Unlock the Best of UAE with <span className={styles.span}>the</span> HUNTR </p>
        <p className={styles.sub_head}>Your insider guide to the city’s top restaurants, hidden gems, and exclusive experiences.</p>
        <div className={styles.app_button}>
          <Button para="Download App" />
        </div>
      </div>
      <div className={styles.overview}>
        <Content
          para='GUIDES'
          head='The ultimate guide to date night in Dubai: 118 gems to explore'
          para2='Something to suit all moods and tastes...' />
        <Content
          para='THE DIRECTORY'
          head="The Cullinan Dubai: Sophisticated steakhouse dining on Jumeirah's seafront"
          para2='Premium cuts and panoramic Burj Al Arab views create a refined restaurant' />
        <Content
          para='NEWS'
          head='Here’s where you can pick up your free copy of PAPER by HUNTR edition two'
          para2='Catch it while you can' />
      </div>
      <div className={styles.letter_div}>
        <Image className={styles.letter_image}
          src='/letter.jpg'
          alt='places'
          width={500}
          height={500}
          quality={100} />
        <div className={styles.email_div}>
          <p className={styles.email_p}>Get the best of your city straight to your inbox</p>
          <Input
            className={styles.email_in}
            inputClass={styles.email_input_box}
            buttoninputClass={styles.email_b_input}
            vector={styles.vector}
            placeholder="your email" />
        </div>
      </div>
      <div className={styles.single_place}>
        <div className={styles.place_top}>
          <p className={styles.place_top_head}>What our <span>members</span> are loving this week</p>
          <p className={styles.place_top_link}>view more</p>
        </div>
        <div className={styles.place_bottom}>
          <Place src='/Place_1.png' para="kids eat free at SALT" />
          <Place src='/Place_2.png' para="9th Matcha free at knot" />
          <Place src='/Place_3.png' para="20% at HOOF" />
          <Place src='/Place_4.png' para="9th Coffee free at benchmark" />
          <Place src='/Place_5.png' para="10% on drinks at BERENJAK" />
        </div>
      </div>
      <div className={styles.Editor_pick}>
        <p className={styles.Editor_para}>the <span className={styles.Editor_para_span}>HUNTR</span> editor’s picks</p>
        <div className={styles.editor_card}>
          <Editor_card name="Alfatiha, Editor" src='/1.png' para_classname_3='Salt' />
          <Editor_card name="Rina & Vince, Editor" src='/2.jpg' para_classname_3='Polline' />
          <Editor_card name="Jade, Editor" src='/1.png' para_classname_3='Beranjak' />
          <Editor_card name="Jose, Editor" src='/4.jpg' para_classname_3='3fils' />
        </div>
        <div className={styles.circle}>
          <p className={styles.circle_p}>check it</p>
          <p className={styles.circle_p}>out</p>
        </div>
      </div>
      <div className={styles.published_section}>
        <div className={styles.published_top}>
          <p className={styles.published_top_head_p}>Newly Published in the Directory</p>
          <p className={styles.published_top_head_vm}>view more</p>
        </div>
        <div className={styles.published_bottom}>
          <div className={styles.published_bottom1}>
            <div className={styles.published_bottom1_cont}>
              <p className={styles.published_bottom1_p1}>NIGHTLIFE IN DUBAI</p>
              <p className={styles.published_bottom1_p2}>Bolle Dubai: The best Nordic cinnamon rolls and homemade bakes in Al Manara</p>
              <p className={styles.published_bottom1_p3}>Fresh-baked Scandinavian treats in Dubai: From cardamom-spiced cinnamon rolls to za'atar buns, ...</p>
            </div>
            <div className={styles.published_bottom1_image}>
              <Image className={styles.bottom1_image}
                src='/publish_image.png'
                alt='places'
                width={900}
                height={800}
                quality={100} />
            </div>
          </div>
          <div className={styles.published_bottom2}>
            <PublishCard src='/cafe1.png' para1="CAFE & SPECIALTY COFFEE IN DUBAI" />
            <PublishCard src='/cafe2.png' para1="RESTAURANT IN ABU DHABI" />
            <PublishCard src='/cafe3.png' para1="CAFE IN SHARJAH" />
          </div>
        </div>
      </div>
      <div className={styles.news_section}>
        <div className={styles.news_head}>
          <p className={styles.news_top_head_p}>Latest News</p>
          <p className={styles.news_top_head_vm}>view more</p>
        </div>
        <div className={styles.news_top}>
          <PublishCard
            src='/cafe1.png'
            para1="FOOD & DRINK"
            para2="Join the HUNTR for an exclusive preview of the One&Only Royal Mirage iftar experience"
            para3="For those seeking a different ambiance, the Arabian Courtyard presents a bespoke Ramadan majlis beneath the stars..."
          />
          <PublishCard
            src='/cafe2.png'
            para1="LOCAL NEWS"
            para2="International breastfeeding summit to launch in Dubai Expo City this April"
            para3="Dubai's Expo City will host the first International Breastfeeding Summit this April, bringing together leading experts in maternal health and breastfeeding innovation" />
          <PublishCard
            src='/cafe3.png'
            para1="STYLE & BEAUTY"
            para2="Piaget unveils limited edition Ramadan watch with Shamsa Alabbar"
            para3="Piaget has partnered with Emirati designer Shamsa Alabbar to create an exclusive Ramadan timepiece that pays tribute to the UAE's maritime heritage." />
        </div>
        <div className={styles.news_section_div}>
          <Image className={styles.news_section_image}
            src='/newscover.png'
            alt='places'
            width={900}
            height={800}
            quality={100} />
        </div>
      </div>
      <div className={styles.store}>
        <div className={styles.para_store_div}>
          <p className={styles.para1_store}>The hottest items in the store</p>
          <p className={styles.para2_store}>Exclusive access to guides, merch, and events.</p>
        </div>
        <div className={styles.store_div}>
          <Storecard src='/store1.png' para1="Gift Cards" para2="Give the gift of membership." />
          <Storecard src='/store2.png' para1="PDF Guides" para2="Exclusive digital guides for members." />
          <Storecard src='/store3.png' para1="Merchandise" para2="Limited edition products just for you." />
          <Storecard src='/store4.jpg' para1="Event Tickets" para2="Priority access to our special events." />
        </div>
        <Button para="view more" />
      </div>
      <div className={styles.guide}>
        <div className={styles.guide_top}>
          <div className={styles.guide_para}>
            <p className={styles.published_top_head_p}>The latest curated guides</p>
            <p className={styles.published_top_head_vm}>view more</p>
          </div>
          <div className={styles.filter_g}>
            <p className={styles.f_g_1}>Cafes</p>
            <p className={styles.f_g_1}>Hidden Gems</p>
            <p className={styles.f_g_1}>Entertainment</p>
          </div>
        </div>
        <div className={styles.filter_image_div}>
          <div className={styles.explore_circle}>Explore</div>
          <div className={styles.f_i_1}>
            <div className={styles.explore1}>20 Places</div>
            <Image className={styles.guide_image}
              src='/guide1.png'
              alt='place guide 1'
              width={1000}
              height={1000} />
            <div className={styles.guide_image_para_div}>
              <p className={styles.g_i_para1}>La Petite Café</p>
              <p className={styles.g_i_para}>Cozy brunch spot with the best croissants in town.</p>
            </div>
          </div>
          <div className={styles.f_i_2}>
            <div className={styles.f_g_2a}>
              <div className={styles.explore}>20 Places</div>
              <Image className={styles.guide_image2}
                src='/guide2a.png'
                alt='place guide 2'
                width={1000}
                height={1000} />
              <div className={styles.guide_image_para_div}>
                <p className={styles.g_i_para1}>La Petite Café</p>
                <p className={styles.g_i_para}>Cozy brunch spot with the best croissants in town.</p>
              </div>
            </div>
            <div className={styles.f_g_2a}>
              <div className={styles.explore}>20 Places</div>
              <Image className={styles.guide_image2}
                src='/guide2b.png'
                alt='place guide 3'
                width={1000}
                height={1000} />
              <div className={styles.guide_image_para_div}>
                <p className={styles.g_i_para1}>La Petite Café</p>
                <p className={styles.g_i_para}>Cozy brunch spot with the best croissants in town.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.maroon}>
        <div className={styles.maroon_para}>
          <p className={styles.m_p_1}>The City’s Best – Now in Your Pocket</p>
          <p className={styles.m_p_2}>Discover, explore, and experience the best places with the Hunter app.</p>
        </div>
        <div className={styles.marooN_image_div}>
          <div className={styles.m_i_div}>
            <div className={styles.guide_image_div2}>
              <Image className={styles.guide_image2}
                src='/mbl_footer.png'
                alt='place guide 2'
                width={1000}
                height={1000} />
            </div>
          </div>
          <div className={styles.button_home}>
            <button className={styles.b1}>
              <Image className={styles.b1image}
                src='/googlelogoend.png'
                alt='place guide 2'
                width={100}
                height={100} />
            </button>
            <button className={styles.b1}>
              <Image className={styles.b1image}
                src='/googlelogo1.png'
                alt='place guide 2'
                width={100}
                height={100} />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
