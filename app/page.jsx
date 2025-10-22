
import styles from "./page.module.css";
import Button from "@/components/Button";
import Hero from "@/components/Hero";
import Image from "next/image";
import Content from "./HomepageComponents/content";
import Input from "@/components/input";
import Editor_card from "./HomepageComponents/Editor_card";
import Place from "./HomepageComponents/place";
import Storecard from "./HomepageComponents/Storecard";
import Publish_section from "./HomepageComponents/Publish_section";
import Guide from "./HomepageComponents/Guide";
import DownloadButton from "./HomepageComponents/DownloadButton";
import HomeNews from "./HomepageComponents/HomeNews";
import Maroon from './HomepageComponents/Maroon';

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.top}>
        <Hero src='/Homepage_cover.jpg' alt='Dowload our App' />
      </div>
      <DownloadButton />
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
      <div className={styles.publish}>
        <Publish_section heading="Newly Published in the Directory" />
      </div>
      <HomeNews />
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
      <div className={styles.home_guide}>
        <Guide
          heading='The latest curated guides'
          para1a='La Petite Café'
          para1b='Cozy brunch spot with the best croissants in town.'
          para2a='La Petite Café'
          para2b='Cozy brunch spot with the best croissants in town.'
          explore='20 Places'
          dir={false}
        />
      </div>
      <Maroon />
    </div>
  );
}
