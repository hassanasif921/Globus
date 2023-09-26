import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Cover from '../components/Cover'
import Link from 'next/link'
import Script from 'next/script'

export default function Home() {

  return (
    <>
      <Head>
        <title>Globus</title>
        <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"></link>
        <meta name="description" content="Globus Coin was born from the idea of creating something unique where we can create a ecosystem of 
        services and products which gives boost to global usage of crypto assets by the 
        crypto community as well as the normal user." />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/icons/site.webmanifest" />
        <link rel="icon" href="/icons/favicon.ico" />

      </Head>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      {/* <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-B2KH2ZHR28"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-B2KH2ZHR28');
        `}
      </Script>
      <Script id='adroll'>
        {`
        adroll_adv_id = "VKV3MHZLKZBIPCWRDLLPWL";
        adroll_pix_id = "UXKTQBEYFBHGDA3O6YTR45";
        adroll_version = "2.0";
    
        (function(w, d, e, o, a) {
            w.__adroll_loaded = true;
            w.adroll = w.adroll || [];
            w.adroll.f = [ 'setProperties', 'identify', 'track' ];
            var roundtripUrl = "https://s.adroll.com/j/" + adroll_adv_id
                    + "/roundtrip.js";
            for (a = 0; a < w.adroll.f.length; a++) {
                w.adroll[w.adroll.f[a]] = w.adroll[w.adroll.f[a]] || (function(n) {
                    return function() {
                        w.adroll.push([ n, arguments ])
                    }
                })(w.adroll.f[a])
            }
    
            e = d.createElement('script');
            o = d.getElementsByTagName('script')[0];
            e.async = 1;
            e.src = roundtripUrl;
            o.parentNode.insertBefore(e, o);
        })(window, document);
        adroll.track("pageView");
        `}
      </Script> */}
      <Navbar />
      <Cover />

      {/* video-section--------------- */}
      <section className={styles.videoSection}>
        <p>
          Welcome to Globuschain, the revolutionary new earning app that allows you to earn GLSC, the native cryptocurrency of the Globuschain network.
        </p>
        <h1>Coming Soon</h1>
        <div className={styles.videoBracket}>
          <div className={styles.videoCard}>
            <video src="/glsc-earning.mp4" poster='/video-poster.png' controls></video>
            <p>
              <h2>GLSC earning app</h2> <br/>
              •	The Globuschain earning app is designed to be easy to use and accessible to everyone, regardless of their experience with cryptocurrency<br/>
              •	Earn GLSC by participating in the network, including tasks like inviting friends to connect and earn GLSC<br/>
              •	The more you participate, the more GLSC you can earn, and you can move your GLSC coins to the Globus Wallet after achieving a certain goal and participation level<br/>
              •	Key features include: security through cutting-edge encryption and other measures, and flexibility in earning GLSC through a variety of methods<br/>
              •	Download the app when it is launched to start building your wealth and making a difference in the world of cryptocurrency and digital assets.
            </p>
          </div>
          <div className={[styles.videoCard, styles.reverseLater].join(" ")}>
            <p>
              <h2>Web3 super app</h2> <br/>
              •	Introducing Web3SuperApp, an all-in-one super app based on web3 services that provides users with all the services currently offered by prominent Cryptocurrency companies and more<br/>
              •	Web3SuperApp built on latest web3 technology for secure and decentralized transactions<br/>
              •	Wide range of features to meet the needs of novice and experienced traders, including buying, selling, and managing digital assets, advanced charting tools, and web3-based services like DeFi and NFT trading<br/>
              •	Built-in wallet for secure and decentralized storage and management of digital assets, access to dApps and smart contract interactions<br/>
              •	Security is a top priority, with cutting-edge encryption and two-factor authentication<br/>
              •	Constantly working to improve and offer new features, with a dedicated team of experts providing the best web3-based experience possible<br/>
              •	Download Web3SuperApp when it is launched and take control of your digital assets and start building your wealth.

            </p>
            <video src="/web3-super.mp4" poster='/video-poster.png' controls></video>
          </div>
          <div className={styles.videoCard}>
            <video src="/super.mp4" poster='/video-poster.png' controls></video>
            <p>
              <h2>Super App</h2> <br/>
              •	Introducing Globus, the ultimate super app that will change the way you use your phone<br/>
              •	All-in-one app providing a wide range of services like messaging and social networking and media to shopping, food ordering taxi hailing ,payments and much much more.<br/>
              •	Easily stay in touch with friends and family through instant messaging, voice calls, video chats, share photos and videos<br/>
              •	Follow your favorite celebrities, influencers and brands and stay updated on the latest news and trends.<br/>
              •	Seamless shopping experience, purchase products from favorite stores and brands directly from the app, built-in payment system for quick transactions<br/>
              •	Other services include booking reservations, ordering food delivery and more, with intuitive and user-friendly interface<br/>
              •	App makes use of web3 payment system, GLSC coins can be used to get discounts and offers only available for GLSC Investors and traders.<br/>
              •	Convenience and efficiency, no need to juggle multiple apps. Download now and experience the future of mobile apps.

            </p>
          </div>
        </div>
      </section>
      {/* video-section--------------- */}


      {/* airdrop-section------------- */}
      {/* <section className={styles.airdropSection}>
        <h3 className={styles.airdropHeader}>Airdrop</h3>
        <div className={styles.airdropBracket}>
          <div className={styles.airdropLeft}>
            <h4 className={styles.airdropHead}>Be Our Influencer</h4>
            <p className={styles.airdropPara}>
              GETTING 100000 Globus Smart Coins (GLSC)! Airdrop.
              That&apos;s right, we&apos;re giving 1000 lucky person the
              chance to win $ 10 worth of GLSC each. for doing Simple tasks.
              <ol className={styles.airdropList}>
                <li className={styles.airdropListItem}>Follow GlobusChain on Twitter</li>
                <li className={styles.airdropListItem}>Tweet about GlobusCain and tag Elon Musk</li>
                <li className={styles.airdropListItem}>Join the GlobusChain Telegram Channel</li>
                <li className={styles.airdropListItem}>Fill all your details in the following Google form and submit.</li>
              </ol>
            </p>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeXd4JtsnX_WCf_UAWkq8YCHIi0xd8K5elxaTl0V4vlJ46aeg/viewform"><a rel="noreferrer" target="_blank" className={styles.airdropActionBtn}>Apply Now</a></Link>
          </div>
          <div className={styles.airdropRight}>
            <h4 className={styles.airdropHead}>GRAB THE OPPORTUNITY ! Win $100K Worth of Globus Smart Coins (GLSC)!</h4>
            <p className={styles.airdropPara}>
              That&apos;s right, we&apos;re giving 10 lucky person the chance to win $100k worth of
              GLSC . To enter, simply follow the steps in the competition box, or follow the steps below.
              We want to give our community the best possible chance to win this prize, that&apos;s
              why we&apos;ve given you not one, not two, but 13 ( thirteen) ways to enter our competition.
              Results be announced on 2nd of Jan 2023.
              What&apos;s more, if you do every one of them they will total up to 21 entries into the
              competition! Multiplied by multiple of minimum amount to be invested .i.e. if you invest 0.3 then
              and done all tasks then your entries will be 21x3 = 63 and so on.
            </p>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf06QD5QpRcJ_ip1vR4BBd5WgQrbNCgpxXrf1NxUSsf5sT0qA/viewform"><a rel="noreferrer" target="_blank" className={styles.airdropActionBtn}>Apply Now</a></Link>
          </div>
        </div>
      </section> */}

      {/* airdrop-section------------- */}
      {/* feature-section-------- */}
      <section className={styles.featureSection}>
        <div className={styles.featureBlock}>

          <div className={styles.featureCard}>
            <p className={styles.featureIcon}><i className="las la-cube"></i></p>
            <h4 className={styles.featureHead}>DECENTRALISED SYSTEM</h4>
            <p className={styles.featureText}>
              A technical failure can paralyze all affiliate networks on a centralized platfotrm,
              until the cause is detected and rectified the system.
            </p>
          </div>
          <div className={styles.featureCard}>
            <p className={styles.featureIcon}><i className="las la-shield-alt"></i></p>
            <h4 className={styles.featureHead}>BANKS PAYMENT SYSTEMS</h4>
            <p className={styles.featureText}>
              Up to 45% of a merchant&apos;s budget is spent on commissions charged by a number
              of brokers, including banks, payment systems.
            </p>
          </div>
          <div className={styles.featureCard}>
            <p className={styles.featureIcon}><i className="las la-project-diagram"></i></p>
            <h4 className={styles.featureHead}>CPA NETWORKS</h4>
            <p className={styles.featureText}>
              Affiliate networks have to pay for using existing platforms on a monthly basis or
              spend money on developing proprietary platforms
            </p>
          </div>

        </div>
      </section>
      {/* feature-section-------- */}

      {/* about-section------ */}
      <section className={styles.aboutSection} id="about">
        <div className={styles.aboutImageSection}>
          <img src="/about.gif" alt="image" />
        </div>
        <div className={styles.aboutTextSection}>
          <h3 className={styles.aboutHeader}>Meet Future Globus</h3>
          <p className={styles.aboutText}>
            We will strive to make GlobusChain as one of the prominent
            way Blockchain will be used in different areas of business
            and economy as well as social welfare and other major areas
            of technology
          </p>
          <p className={styles.aboutText}><i className="las la-arrow-right"></i>GlobusChain Blockchain</p>
          <p className={styles.aboutText}><i className="las la-arrow-right"></i>Multicurrency Wallet</p>
          <p className={styles.aboutText}><i className="las la-arrow-right"></i>Defi Exchange</p>
        </div>
      </section>
      <section className={styles.futureSection}>
        <h3>Future Products</h3>
        <div className={styles.futureItemBlock}>
          <ul className={styles.futureColumn}>
            <li><i className="las la-star"></i>GlobusChain Blockchain</li>
            <li><i className="las la-star"></i>Multicurrency Wallet</li>
            <li><i className="las la-star"></i>Defi Exchange</li>
            <li><i className="las la-star"></i>MultiVerse and MetaVerse</li>
            <li><i className="las la-star"></i>Audit Platform for GlobusChain</li>
            <li><i className="las la-star"></i>NFT Marketplace</li>
          </ul>
          <ul className={styles.futureColumn}>
            <li><i className="las la-star"></i>P2P Exchange</li>
            <li><i className="las la-star"></i>Decentralized Marketplace for Products</li>
            <li><i className="las la-star"></i>Social Networking Platform with Short videos feature</li>
            <li><i className="las la-star"></i>Online Education Platform</li>
            <li><i className="las la-star"></i>Dating App</li>
            <li><i className="las la-star"></i>Browser</li>
          </ul>
          <ul className={styles.futureColumn}>
            <li><i className="las la-star"></i>Financial and Insurance Services Platform</li>
            <li><i className="las la-star"></i>Travel, Hotel and Holiday Booking Platform</li>
            <li><i className="las la-star"></i>Payment Wallet</li>
            <li><i className="las la-star"></i>Taxi, Bike and Vehicle Hailing Platform</li>
            <li><i className="las la-star"></i>Asset Based Platform for Real State and other assets</li>
            <li><i className="las la-star"></i>Services Platform</li>
          </ul>
        </div>
      </section>
      <section className={styles.aboutSection}>
        <div className={styles.aboutTextSection}>
          <h3 className={styles.aboutHeader}>Vision and Mission</h3>
          <p className={styles.aboutText}>
          </p>
          <p className={styles.aboutText}><i className="las la-lock"></i>
            <h2>Vision</h2>
            To be at the forefront of new era of technology and innovations which serves next generation of human life , so they can live with more freedom and less fear.</p>
          <p className={styles.aboutText}><i className="las la-lock"></i>
            <h2>Mission</h2>
            Is to give best products and services to users by exploring all possible frontiers in new technology and innovations, and also being socially responsible to our planet and our societies.</p>
          <p className={styles.aboutText}><i className="las la-lock"></i>
            <h2>Solution</h2>
            We have planned a ecosystem of new solutions which will help users to save their assets as well as trade and use them for different services in the coming years. Also we will keep on researching on how we can reinvent the wheel in a way that blockchain can be used in most of the areas of day to day life and how it can be used for betterment of humankind and users of the technology.
          </p>
        </div>
        <div className={styles.aboutImageSection}>
          <img src="/vision-illustration.svg" alt="image" />
        </div>
      </section>
      {/* about-section------ */}
      {/* rail-section-- */}
      <section className={styles.railSection}>

        <div className={styles.railColumn}>
          <div className={styles.railCard}>
            <i className="las la-caret-left"></i>
            <div>
              <h3 className={styles.railHead}>HIGH SPEED AND LOW COSTS</h3>
              <p className={styles.railText}>
                Immediate funding without third-parties. Smart contracts autonomously
                perform funding - collect and release payments
              </p>
            </div>
          </div>
          <div className={styles.railCard}>
            <i className="las la-caret-left"></i>
            <div>
              <h3 className={styles.railHead}>FAIR DEALS ONLY</h3>
              <p className={styles.railText}>
                Open-source smart contract ensures fair and transparent deals between merchants and affiliates
              </p>
            </div>
          </div>
          <div className={styles.railCard}>
            <i className="las la-caret-left"></i>
            <div>
              <h3 className={styles.railHead}>PROTECTION FROM HACKING</h3>
              <p className={styles.railText}>
                On a decentralized platform, all user accounts are independent; if one account is hacked, this won&apos;t breach the security of.
              </p>
            </div>
          </div>
          <div className={styles.railCard}>
            <i className="las la-caret-left"></i>
            <div>
              <h3 className={styles.railHead}>COST EFFECTIVE</h3>
              <p className={styles.railText}>
                Scale economy through decentralization leading to significant decrease in transaction fees
              </p>
            </div>
          </div>
        </div>
        <div className={styles.railColumn}>
          <div className={styles.railCard}>
            <i className="las la-caret-left"></i>
            <div>
              <h3 className={styles.railHead}>NO MORE MIDDLE MEN</h3>
              <p className={styles.railText}>
                Transactions are verified by distributed nodes, and anyone can join or leave the network as they please without disrupting the network&apos;s ability to form consensus on transactions.
              </p>
            </div>
          </div>
          <div className={styles.railCard}>
            <i className="las la-caret-left"></i>
            <div>
              <h3 className={styles.railHead}>EASY ENTRY AND FAIR COMPETITION</h3>
              <p className={styles.railText}>
                Any one can join, and Fair for everyone without any partiality
              </p>
            </div>
          </div>
          <div className={styles.railCard}>
            <i className="las la-caret-left"></i>
            <div>
              <h3 className={styles.railHead}>GLOBAL P2P TRADE FINANCING</h3>
              <p className={styles.railText}>
                The peer-to-peer architecture of blockchain allows all cryptocurrencies to be transferred worldwide, without the need of any middle-man or intermediaries or central server
              </p>
            </div>
          </div>
          <div className={styles.railCard}>
            <i className="las la-caret-left"></i>
            <div>
              <h3 className={styles.railHead}>REAL-TIME DATABASE</h3>
              <p className={styles.railText}>
                Every Transaction and Updates are real time and directly pulled from Smart Contracts lying on Blockchain
              </p>
            </div>
          </div>
        </div>

      </section>
      {/* rail-section-- */}

      {/* tokenomics-section-- */}
      <section className={styles.tokenomicsSection} id="token">
        <h2 className={styles.tokenomicsHeader}>Tokenomics</h2>
        <div className={styles.tokenomicsDetailsHolder}>
          <div className={styles.tokenomicsColumn}>
            <h4 className={styles.tokenDetailHead}>Token Name</h4>
            <p className={styles.tokenDetailText}>Globus Smart Coin</p>
            <h4 className={styles.tokenDetailHead}>Total Supply</h4>
            <p className={styles.tokenDetailText}>1,000,000,000,000,000</p>
            <h4 className={styles.tokenDetailHead}>Pre Sale Start Date</h4>
            <p className={styles.tokenDetailText}>10th Sept 2023</p>
            <h4 className={styles.tokenDetailHead}>Currencies Accepted</h4>
            <p className={styles.tokenDetailText}>BNB</p>
          </div>
          <div className={styles.tokenomicsColumn}>
            <h4 className={styles.tokenDetailHead}>ICO Pre- Sale Globus Coin Supply Launch</h4>
            <p className={styles.tokenDetailText}>200,000,000,000,000</p>
            <h4 className={styles.tokenDetailHead}>ICO Supply OF Globus Coin launch</h4>
            <p className={styles.tokenDetailText}>200,000,000,000,000</p>
            <h4 className={styles.tokenDetailHead}>Soft cap</h4>
            <p className={styles.tokenDetailText}>4000 BNB</p>
            <h4 className={styles.tokenDetailHead}>ICO Start Date</h4>
            <p className={styles.tokenDetailText}>1st Feb 2024</p>
          </div>
          <div className={styles.tokenomicsColumn}>
            <h4 className={styles.tokenDetailHead}>Pre Sale - 1st Phase</h4>
            <p className={styles.tokenDetailText}>1 GLSC = 0.000000025 USDT</p>
            <h4 className={styles.tokenDetailHead}>Pre Sale - 2nd Phase</h4>
            <p className={styles.tokenDetailText}>1 GLSC = 0.00000003 USDT</p>
            <h4 className={styles.tokenDetailHead}>Pre Sale - 3rd Phase</h4>
            <p className={styles.tokenDetailText}>1 GLSC = 0.000000036 USDT</p>
            <h4 className={styles.tokenDetailHead}>Pre Sale- 4th phase</h4>
            <p className={styles.tokenDetailText}>1 GLSC = 0.0000000432 USDT</p>
          </div>
        </div>
      </section>
      {/* tokenomics-section-- */}

      <section className={styles.chartSection}>
        <div>
          <h3>Tokenomics</h3>
          <img src="/tokenomics-chart.png" alt="chart" />

        </div>
        <div>
          <h3>Fund Allocation</h3>
          <img src="/allocation-chart.png" alt="chart" />
        </div>
      </section>




      {/* roadmap-section---------- */}
      <section className={styles.roadmapSection} id="roadmap">
        <h3>Roadmap</h3>

        <div className={styles.timeline}>
          <div className={[styles.container, styles.left].join(" ")}>
            <div className={styles.date}>April-June 2023</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>Complete full wireframe
                      development and finalize
                      app design.
                  </li>
                  <li>Begin development of core
                      platform infrastructure and
                      integration of Web2 and
                      Web3 services.
                  </li>
                  <li>Conduct extensive security
                      audits and testing for
                      platform components.
                  </li>
                  <li>Launch multiverse NFT
                      project to raise additional
                      funds.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className={[styles.container, styles.right].join(" ")}>
            <div className={styles.date}>July-Sept 2023</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>Launch the beta version of the
                      Globuschain platform for user
                      testing and feedback.
                  </li>
                  <li>Implement staking, yield
                      farming, and DeFi services
                      within the platform.
                  </li>
                  <li>Establish partnerships with
                      key industry players and
                      third-party service providers
                  </li>
                  <li>
                      Begin marketing campaigns to
                      raise awareness and drive
                      user acquisition.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className={[styles.container, styles.left].join(" ")}>
            <div className={styles.date}>Oct-Dec 2023</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>Official public launch of the
                      Globuschain platform.
                  </li>
                  <li>Integration of additional
                      services such as e-commerce,
                      gaming, and content sharing.
                  </li>
                  <li>Continuously refine and
                      optimize the platform based on
                      user feedback and analytics.
                  </li>
                  <li>Expand community outreach
                      through events,
                      collaborations, and
                      educational content.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className={[styles.container, styles.right].join(" ")}>
            <div className={styles.date}>Jan-March 2024</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>Introduce mobile app
                      versions for iOS and
                      Android devices.
                  </li>
                  <li>Focus on user experience
                      and accessibility
                      improvements.
                  </li>
                  <li>Explore and integrate
                      innovative solutions such as
                      Layer 2 scaling
                      technologies.
                  </li>
                  <li>
                      Launch a developer program
                      to encourage third-party app
                      development within the
                      ecosystem.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className={[styles.container, styles.left].join(" ")}>
            <div className={styles.date}>April-June 2024</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>Develop and launch the
                      Globuschain platform&apos;s
                      governance module,
                      allowing GLSC Token
                      holders to participate in
                      decision-making
                      processes.
                  </li>
                  <li>Expand the platform&apos;s
                      global reach by targeting
                      new markets and
                      supporting additional
                      languages.
                  </li>
                  <li>Strengthen the platform&apos;s
                      security and privacy
                      features, ensuring user
                      data protection and
                      compliance with evolving
                      regulations.
                  </li>
                  <li>Foster growth of the NFT
                      and gaming ecosystem
                      within the platform by
                      collaborating with artists,
                      developers, and gaming
                      studios.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className={[styles.container, styles.right].join(" ")}>
            <div className={styles.date}>July-Sept 2024</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>Continuously monitor and
                      improve platform
                      performance, scalability,
                      and user experience based
                      on community feedback.
                  </li>
                  <li>Develop and launch
                      advanced DeFi features,
                      such as cross-chain
                      bridges,
                      lending/borrowing
                      services, and derivatives
                      trading.
                  </li>
                  <li>Implement integration with
                      hardware wallet providers
                      (Ledger/Trezor) for enhanced
                      security of user assets.
                  </li>
                  <li>Grow the platform&apos;s brand
                      through marketing initiatives,
                      strategic partnerships, and
                      community engagement.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          {/* <div className={[styles.container, styles.left].join(" ")}>
            <div className={styles.date}>Oct-Dec 2024</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>NFT Market Place Launch
                  </li>
                  <li>P2P Exchange launch
                  </li>
                  <li>DeFi platform launch
                  </li>
                  <li>Start Development of - Decentralised Market Place , Social App, Education App , Browser , Dating App
                  </li>
                  <li>Launch of Mobile version of Wallent and Exchange
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className={[styles.container, styles.right].join(" ")}>
            <div className={styles.date}>Jan-March 2024</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>Startup Studio and Launchapad Development
                  </li>
                  <li>New Partnerships
                  </li>
                  <li>Finance , Insurance and Lending Platform Launch
                  </li>
                  <li>
                    Dervatives Platcorm Launch
                  </li>
                  <li>
                    Payment wallet first version Launch
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className={[styles.container, styles.left].join(" ")}>
            <div className={styles.date}>April-June 2024</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>Social Networking and Short Video app Launch
                  </li>
                  <li>Education App launch
                  </li>
                  <li>Browser Launch
                  </li>
                  <li>Dating app Launch
                  </li>
                  <li>Travel booking Platform and app Launch
                  </li>
                  <li>Education App launch
                  </li>
                  <li>Dervatives Platform first version test
                  </li>
                  <li>Decentralised Market place Launch
                  </li>
                  <li>Payment App Launch
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className={[styles.container, styles.right].join(" ")}>
            <div className={styles.date}>July-Sept 2024</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>Online and Offline Services Platform Development start
                  </li>
                  <li>Taxi, Bike and Vehicle Hailing renting Platform Development start
                  </li>
                  <li>Asset Based Platform Development Start
                  </li>
                  <li>Game Platform development Start
                  </li>
                  <li>Matrimonial Platform Development Start
                  </li>
                  <li>Multiverse Metaverse and App Launch with NFT Integration
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className={[styles.container, styles.left].join(" ")}>
            <div className={styles.date}>Oct-Dec 2024</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>Start Development of Job Portal and app
                  </li>
                  <li>Start development of Real estate buy- sale and rental app
                  </li>
                  <li>Start R&amps;D in areas like Artificial intelligence, Machine Learning and Robotics
                  </li>
                  <li>
                    Start R&amps;D in area of Hardware , computers , mobiles and and automobile Industry .
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className={[styles.container, styles.right].join(" ")}>
            <div className={styles.date}>Jan-March 2025</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>Derivatives Platform and app launch
                  </li>
                  <li>Services Platform and App Launch
                  </li>
                  <li>Multiverse Metaverse New Services Launch
                  </li>
                  <li>Taxi Hailing app and Platform launch
                  </li>
                  <li>Game Platform first version Launch
                  </li>
                  <li>Asset based platform First version launch
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className={[styles.container, styles.left].join(" ")}>
            <div className={styles.date}>April-June 2025</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>Matrimonial Website and app Launch
                  </li>
                  <li>Asset based Platform public version Launch
                  </li>
                  <li>Game platform final version launch
                  </li>
                  <li>
                    JobPortal and app launch
                  </li>
                  <li>
                    Real Estate app and website launch
                  </li>

                </ul>
              </p>
            </div>
          </div> */}
          <div className={[styles.container, styles.right].join(" ")}>
            <div className={styles.date}>2025</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  {/* <li>Start Decentalied crowdfunding platform Development
                  </li>
                  <li>Start Decentralised Charity Platform Development
                  </li> */}
                  <li>To be Continued -----------------
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* roadmap-section-------- */}


      {/* why-section-- */}
      <section className={styles.whySection}>
        <div className={styles.whyTextSection}>
          <h2 className={styles.whyHeader}>Why choose us?</h2>
          <p className={styles.whyAnswer}>
            As we all know that any company thrives on its Mission and Vision and
            can only become successful when it gets support of the people who believe
            in their Mission and Vision. We have put forward our Vision of future in
            front of you and we are very passionate to make a difference for current
            and future generation of humanity.
          </p>
          <div className={styles.whyAnswerPoint}>
            <h3>Authentic Brand</h3>
            <p>
              Our aim will be to be able to provide genuine value to the community
              is the first step toward developing a meaningful products and services
              and, as a result, a successful organisation.
            </p>
          </div>
          <div className={styles.whyAnswerPoint}>
            <h3>Comprehensive Platform</h3>
            <p>
              We prefer comprehensive platform for cryptocurrency enthusiasts rather
              than having too many platforms to achieve their goal of growing funds
              in the world of Blockchain
            </p>
          </div>
          <div className={styles.whyAnswerPoint}>
            <h3>Simple To Use</h3>
            <p>
              Our platform will be extremely simple to use, with only the necessary
              options for users and other stakeholders.
            </p>
          </div>
        </div>
        <div className={styles.whyImageSection}>
          <img src="/rotating-coin.gif" alt="Globus icon" />
        </div>
      </section>
      {/* why-section-- */}
      {/* team-section------ */}
      <section className={styles.teamSection} id="team">
        <h3 className={styles.teamHeader}>Team</h3>
        <div className={styles.teamBlock}>
          <div className={styles.teamCard}>
            <img src="/leo.jpeg" alt="team-member" />
            <h4 className={styles.teamName}>Jeet </h4>
            <p className={styles.teamDes}>Founder and CEO </p>
            <p>
              Entrepreneur with zeal and passion for blockchain and solutions it can bring for the brave new world
            </p>
          </div>
          <div className={styles.teamCard}>
            <img src="/rabbit.jpeg" alt="team-member" />
            <h4 className={styles.teamName}>AB </h4>
            <p className={styles.teamDes}>Co-Founder and CTO </p>
            <p>
              With immense knowledge in blockchain, Web 3 and Web 2  technologies .
            </p>
          </div>
          <div className={styles.teamCard}>
            <img src="/wolf.jpeg" alt="team-member" />
            <h4 className={styles.teamName}>RAk </h4>
            <p className={styles.teamDes}>Marketing and Sales Head </p>
            <p>
              Creative mind with enthusiastic new view and aproach towards the new blockchain maarket needs.
            </p>
          </div>
        </div>
      </section>
      {/* team-section------ */}
      {/* whitepaper-section------- */}
      <section className={styles.whitepaperSection} id="whitepaper">
        <div className={styles.whitepaperBlock}>
          <div className={styles.whitepaperTextSection}>
            <h2 className={styles.whitepaperHead}>Whitepaper</h2>
            <p className={styles.whitepaperText}>
              Total of 1 quadrillion (1,000,000,000,000,000) Globus Smart Coins will be minted through
              Smart contract and deployed through Binance Smart Chain . We will be selling 20% of the
              tokens in presale which will be done in 4 phases which will run max for 92 days . 1st
              presale for 45 days and rest 3 pre-sales for 15 days each. If the Pre-Sale phases goals
              are reached before time, we will start next phase of pre sale within 24 hours. We have
              kept the investment amount to minimum 0.1 BNB for our presale which will make easy for
              most of the retail investors to invest.
              We will not accept any FIAT currencies during the Pre-Sale as we firmly believe in digital
              currencies and that&apos;s why working on building a ecosystem based on blockchain and
              crypto assets and crypto currencies.
            </p>
          </div>
          <div className={styles.whitepaperActionSection}>
            <Link href="/Globus-WhitePaper-2.pdf"><a target="_blank" rel="noreferrer">Read Online</a></Link>
            <Link href="/Globus-WhitePaper-2.pdf"><a target="_blank" rel="noreferrer" download>Download</a></Link>
          </div>
        </div>
      </section>
      {/* whitepaper-section------- */}

      {/* contact-section-- */}
      <section className={styles.contactSection} id="contact">
        <div className={styles.contactSocialSide}>
          <h3 className={styles.contactHeader}>Contact Us</h3>
          <div className={styles.contactSocialBlock}>
            <Link href="mailto:info@globuschain.com"><a target="_blank" rel="noreferrer"><i className="las la-envelope"></i>info@globuschain.com</a></Link>
            <Link href="https://t.me/+ttwTfhBWPz5iOTA1"><a target="_blank" rel="noreferrer"><i className="lab la-telegram"></i>Telegram</a></Link>
            <Link href="https://twitter.com/globuschain"><a target="_blank" rel="noreferrer"><i className="lab la-twitter-square"></i>Twitter</a></Link>
            <Link href="https://www.facebook.com/GlobusChain/"><a target="_blank" rel="noreferrer"><i className="lab la-facebook"></i>Facebook</a></Link>
            <Link href="https://www.reddit.com/r/globuschain/"><a target="_blank" rel="noreferrer"><i className="lab la-reddit"></i>Reddit</a></Link>
            <Link href="https://www.instagram.com/globuschain/"><a target="_blank" rel="noreferrer"><i className="lab la-instagram"></i>Instagram</a></Link>
            <Link href="https://www.youtube.com/@globuschain"><a target="_blank" rel="noreferrer"><i className="lab la-youtube"></i>YouTube</a></Link>
            <Link href="https://discord.gg/VMq2WycFsN"><a target="_blank" rel="noreferrer"><i className="lab la-discord"></i>Discord</a></Link>
            <Link href="https://globuschain.medium.com/"><a target="_blank" rel="noreferrer"><i className="lab la-medium"></i>Medium</a></Link>
          </div>
        </div>
        <div className={styles.contactFormSide}>
          <div className={styles.contactForm}>
            <input type="text" id='name' required autoComplete='off' placeholder='Full Name' />
            <input type="email" id='email' required autoComplete='off' placeholder='Email' />
            <input type="text" id='telegram' required autoComplete='off' placeholder='Telegram' />
            <input type="text" id='message' required autoComplete='off' placeholder='Message' />
            <button className={styles.submitBtn} onClick={submitForm}>Send Message</button>
          </div>
        </div>
      </section>
      {/* contact-section-- */}

      {/* footer--------- */}
      <section className={styles.footerSection}>
        <div className={styles.brandFooter}>
          <p className={styles.brandText}>Designed with</p>
          <p className={styles.heart}><i className="las la-heart"></i></p>
          <p className={styles.brandText}>by</p>
          <p className={styles.brandText}><Link href="https://www.globuschain.com"><a target="_blank" rel="noreferrer">GLOBUS</a></Link></p>
        </div>
      </section>
      {/* footer--------- */}


    </>
  )
}


function submitForm() {
  let name = document.getElementById("name").value;
  let telegram = document.getElementById("telegram").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  let data = {
    name,
    telegram,
    email,
    message
  }

  fetch('/api/email', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then((res) => {
    alert("Application Submitted!");

    document.getElementById("name").value = "";
    document.getElementById("telegram").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    console.log('Response received')
    if (res.status === 200) {
      console.log('Response succeeded!')
    }
  })
}