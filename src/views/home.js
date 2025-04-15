import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Character NFT template</title>
        <meta property="og:title" content="Character NFT template" />
      </Helmet>
      <header className="home-header10">
        <header data-thq="thq-navbar" className="home-navbar">
          <span className="home-logo1">
            <span>YOURWAY</span>
            <br></br>
          </span>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="home-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="home-nav1"
            >
              <button className="home-button1 button-clean button">
                About
              </button>
              <button className="home-button2 button-clean button">
                Blog 
              </button>
              <a
                href="https://in.linkedin.com/in/raghav-dot-sharma"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link1 button-clean button"
              >
                What&apos;s Cooking
              </a>
            </nav>
          </div>
          <div data-thq="thq-navbar-btn-group" className="home-btn-group">
            <div className="home-socials1">
              <button className="social button">
                <img
                  alt="image"
                  src="/Icons/twitter.svg"
                  className="home-image10"
                />
              </button>
              <button className="social button">
                <img
                  alt="image"
                  src="/Icons/discord.svg"
                  className="home-image11"
                />
              </button>
            </div>
            <a
              href="https://in.linkedin.com/in/raghav-dot-sharma"
              target="_blank"
              rel="noreferrer noopener"
              className="home-view1 button"
            >
              Connect+
            </a>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <button className="button home-button3">
              <svg viewBox="0 0 1024 1024" className="home-icon10">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </button>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav2"
            >
              <div className="home-container2">
                <span className="home-logo2">Character</span>
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon12">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-nav3"
              >
                <span className="home-text12">About</span>
                <span className="home-text13">Features</span>
                <span className="home-text14">Pricing</span>
                <span className="home-text15">Team</span>
                <span className="home-text16">Blog</span>
              </nav>
              <div className="home-container3">
                <button className="home-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div className="home-icon-group">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon14">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon16">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon18">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </header>
      <section className="home-hero">
        <div className="home-heading10">
          <h1 className="home-header11">Raghav Sharma</h1>
          <p className="home-caption1">Tech | Business | Startups </p>
        </div>
        <div className="home-buttons">
          <button className="button">Namaste*</button>
        </div>
      </section>
      <section className="home-description1">
        <img
          alt="image"
          src="/hero-divider-1500w.png"
          className="home-divider-image"
        />
        <div className="home-container4">
          <div className="home-description2">
            <div className="home-content10">
              <p className="home-paragraph1">
                &quot;I’m just a curious soul, quietly tuned in to everything
                unfolding around me.&quot;
              </p>
              <p className="home-paragraph2">
                From the subtle shifts in culture to the big waves in
                innovation, I love exploring how things evolve. Tech, business,
                and startups are my playgrounds—where ideas spark, grow, and
                sometimes, change everything.
              </p>
            </div>
            <div className="home-links1">
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link2 button-link button"
              >
                <span>Join Me On Discord</span>
                <img
                  alt="image"
                  src="/Icons/arrow.svg"
                  className="home-arrow1"
                />
              </a>
              <a
                href="https://www.youtube.com/@Raghavdotdixit"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link3 button-link button"
              >
                <span>Watch the world through my lens</span>
                <img
                  alt="image"
                  src="/Icons/arrow.svg"
                  className="home-arrow2"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="home-cards">
        <div className="home-row1">
          <div className="home-card1">
            <div className="home-avatar1">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1609034227505-5876f6aa4e90?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIwfHxDYW1lcmF8ZW58MHx8fHwxNzQ0NjI4NTE4fDA&amp;ixlib=rb-4.0.3&amp;w=200"
                className="home-avatar2"
              />
            </div>
            <div className="home-main1">
              <div className="home-content11">
                <h2 className="home-header12">RDD Media! </h2>
                <p className="home-description3">
                  <span>
                    RDD Media is a creative-driven media company crafting
                    compelling content that connects, informs, and inspires.
                  </span>
                  <br></br>
                  <span>
                    From digital storytelling to brand campaigns, we specialize
                    in turning ideas into impactful visuals—blending strategy,
                    creativity, and a deep love for media that moves people.
                  </span>
                </p>
              </div>
              <button className="home-learn1 button">
                <a
                  href="https://www.youtube.com/@Raghavdotdixit"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link4"
                >
                  Learn more
                </a>
                <img
                  alt="image"
                  src="/Icons/arrow.svg"
                  className="home-image12"
                />
              </button>
            </div>
          </div>
          <div className="home-card2">
            <div className="home-avatar3">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGxhcHRvcHxlbnwwfHx8fDE3NDQ2MjQ0MDN8MA&amp;ixlib=rb-4.0.3&amp;w=200"
                className="home-avatar4"
              />
            </div>
            <div className="home-main2">
              <div className="home-content12">
                <h2 className="home-header13">
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>Bits of Code, Pieces of Vision</span>
                </h2>
                <p className="home-description4">
                  <span>
                    I&apos;m a B.Tech graduate in Computer Science, specialized
                    in Cloud Computing and Blockchain Technology.
                  </span>
                  <br></br>
                  <span>
                    As a Java developer, I love building scalable solutions and
                    diving deep into modern tech stacks. Beyond code, I’m driven
                    by a strong interest in business and startups—where
                    innovation meets impact.
                  </span>
                </p>
              </div>
              <button className="home-learn2 button">
                <a
                  href="https://in.linkedin.com/in/raghav-dot-sharma"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link5"
                >
                  Learn more
                </a>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image13"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="home-card3">
          <div className="home-avatar5">
            <img
              alt="image"
              src="/Avatars/light-avatar.svg"
              className="home-avatar6"
            />
          </div>
          <div className="home-row2">
            <div className="home-main3">
              <div className="home-content13">
                <h2 className="home-header14">
                  <span>
                    &quot;I build in logic, dream in code, and move with the
                    rhythm of innovation.&quot;
                  </span>
                  <br></br>
                </h2>
                <p className="home-description5">
                  I see technology not just as a tool, but as a language of
                  possibility. With a foundation in cloud computing, blockchain,
                  and Java development, I craft solutions that are both logical
                  and visionary. My curiosity extends beyond code—into the heart
                  of startups and the spark of innovation. For me, every line I
                  write and every idea I chase is part of a bigger rhythm: one
                  that blends creativity, purpose, and progress.
                </p>
              </div>
            </div>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1625216109110-d444d70ff665?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxtZXRhJTIwdGVjaHxlbnwwfHx8fDE3NDQ2NDA5ODl8MA&amp;ixlib=rb-4.0.3&amp;w=600"
              className="home-image14"
            />
          </div>
        </div>
      </section>
      <section className="home-project">
        <div className="home-understand">
          <div className="home-content14">
            <span className="home-caption2">FUTURE</span>
            <div className="home-heading11">
              <h2 className="home-header15">
                Creating Biggest Get-paid For Watching content platform.
              </h2>
              <p className="home-header16">
                <span>Watch. Enjoy. Earn.</span>
                <br></br>
                <span>
                  Welcome to the future of content. This is a space where your
                  time and attention have real value. Watch what you love,
                  discover new creators, and get rewarded—because here, you’re
                  more than just a viewer.
                </span>
              </p>
            </div>
          </div>
          <img alt="image" src="/group%202415.svg" className="home-image15" />
        </div>
        <div className="home-mining">
          <img alt="image" src="/group%202422.svg" className="home-image16" />
          <div className="home-content15">
            <span className="home-caption3">Project</span>
            <div className="home-heading12">
              <h2 className="home-header17">How It works</h2>
              <p className="home-header18">
                <span>Sign Up &amp; Set Preferences:</span>
                <br></br>
                <span>
                  Create your account and tell us what type of content you
                  enjoy—personalize your experience!
                </span>
                <br></br>
                <br></br>
                <span>Watch Content You Love:</span>
                <br></br>
                <span>
                  Browse through videos, shows, and streams. Whether it’s
                  entertainment, education, or anything in between, there’s
                  something for everyone.
                </span>
                <br></br>
                <br></br>
                <span>Earn While You Watch:</span>
                <br></br>
                <span>
                  Sit back and relax. Get rewarded with points, tokens, or cash
                  for every minute you spend watching.
                </span>
                <br></br>
                <br></br>
                <span>Redeem Rewards:</span>
                <br></br>
                <span>
                  Cash out your earnings, unlock exclusive content, or exchange
                  rewards for exciting offers.
                </span>
                <br></br>
              </p>
            </div>
            <button className="home-view3 button-link button">
              <span>Learn More</span>
              <img
                alt="image"
                src="/Icons/arrow.svg"
                className="home-image17"
              />
            </button>
          </div>
        </div>
      </section>
      <section className="home-roadmap">
        <div className="home-heading13">
          <h2 className="home-header19">Roadmap</h2>
        </div>
        <div className="home-list1">
          <div className="home-step1">
            <span className="home-caption4">01</span>
            <div className="home-heading14">
              <h2 className="home-header20">
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text53">
                  Visionary Media Company: RDD Media
                </span>
              </h2>
              <p className="home-header21">
                We’re building RDD Media as a powerhouse in the media landscape,
                where creativity, innovation, and storytelling intersect to
                drive change.
              </p>
            </div>
          </div>
          <div className="home-step2">
            <span className="home-caption5">02</span>
            <div className="home-heading15">
              <h2 className="home-header22">
                Revolutionizing Content Consumption
              </h2>
              <p className="home-header23">
                <span>
                  Our goal is to transform the way people experience content,
                  creating a platform where watching isn’t just
                  entertainment—it’s a way to earn.
                </span>
                <br></br>
              </p>
            </div>
          </div>
          <div className="home-step3">
            <span className="home-caption6">03</span>
            <div className="home-heading16">
              <h2 className="home-header24">Building the Reward System</h2>
              <p className="home-header25">
                We’re crafting an ecosystem that rewards users for their time
                and attention, allowing them to earn while engaging with content
                they love.
              </p>
            </div>
          </div>
          <div className="home-step4">
            <span className="home-caption7">04</span>
            <div className="home-heading17">
              <h2 className="home-header26"> Shaping the Future of Media</h2>
              <p className="home-header27">
                As we expand and grow, RDD Media will lead the charge in
                creating new opportunities for creators and viewers
                alike—blurring the lines between entertainment and value.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-join-us">
        <div className="home-content16">
          <div className="home-main4">
            <div className="home-heading18">
              <h2 className="home-header28">What&apos;s Your Version?</h2>
              <p className="home-caption8">Join me and explore who you are?</p>
            </div>
          </div>
          <img alt="image" src="/group%202273.svg" className="home-image18" />
        </div>
      </section>
      <section className="home-faq">
        <h2 className="home-header29">We have all the answers</h2>
        <div className="home-accordion1">
          <div
            data-role="accordion-container"
            className="home-element1 accordion"
          >
            <div className="home-content17">
              <span className="home-header30">What is RDD Media?</span>
              <span data-role="accordion-content" className="home-description6">
                RDD Media is an innovative media company focused on creating
                content that not only entertains but also empowers. We aim to
                shape the future of digital media by blending storytelling with
                emerging technologies and new content consumption models.
              </span>
            </div>
            <div className="home-icon-container1">
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-closed"
                className="home-icon20"
              >
                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-open"
                className="home-icon22"
              >
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
          <div
            data-role="accordion-container"
            className="home-element2 accordion"
          >
            <div className="home-content18">
              <span className="home-header31">
                How does the &quot;Get Paid for Watching Content&quot; platform
                work?
              </span>
              <span data-role="accordion-content" className="home-description7">
                Our platform allows you to earn rewards simply by watching
                videos, shows, and other content. After signing up and selecting
                your preferences, you can start watching content and receive
                points or tokens for every minute spent engaging. These rewards
                can be redeemed for cash or other exciting perks.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
            <div className="home-icon-container2">
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-closed"
                className="home-icon24"
              >
                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-open"
                className="home-icon26"
              >
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
          <div
            data-role="accordion-container"
            className="home-element3 accordion"
          >
            <div className="home-content19">
              <span className="home-header32">
                . What types of content can I watch?
              </span>
              <span data-role="accordion-content" className="home-description8">
                You can watch a wide range of content, from entertainment and
                educational videos to exclusive shows and live streams. Our
                platform offers something for everyone, with personalized
                recommendations based on your preferences.
              </span>
            </div>
            <div className="home-icon-container3">
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-closed"
                className="home-icon28"
              >
                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-open"
                className="home-icon30"
              >
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
          <div
            data-role="accordion-container"
            className="home-element4 accordion"
          >
            <div className="home-content20">
              <span className="home-header33">
                {' '}
                How do I redeem the rewards I earn?
              </span>
              <span data-role="accordion-content" className="home-description9">
                Once you accumulate enough points or tokens, you can easily
                redeem them through our platform. You’ll have the option to cash
                out, unlock exclusive content, or exchange them for special
                offers. Our goal is to make the process simple and seamless.
              </span>
            </div>
            <div className="home-icon-container4">
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-closed"
                className="home-icon32"
              >
                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-open"
                className="home-icon34"
              >
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
          <div
            data-role="accordion-container"
            className="home-element5 accordion"
          >
            <div className="home-content21"></div>
            <div className="home-icon-container5">
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-closed"
                className="home-icon36"
              >
                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-open"
                className="home-icon38"
              >
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section className="home-get-yours">
        <div className="home-row3">
          <div className="home-column1">
            <div className="home-card4">
              <img
                alt="image"
                src="/Characters/character-9.svg"
                className="home-image19"
              />
            </div>
          </div>
          <div className="home-column2">
            <div className="home-card5">
              <img
                alt="image"
                src="/Characters/character-10.svg"
                className="home-image20"
              />
            </div>
          </div>
        </div>
        <div className="home-column3">
          <div className="home-card6">
            <div className="home-content22">
              <h2 className="home-header34">Get Started Now</h2>
            </div>
            <a
              href="https://mail.google.com/mail/u/0/#inbox"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link6 button"
            >
              Raghavvdxit@icloud.com
            </a>
          </div>
        </div>
      </section>
      <footer className="home-footer">
        <div className="home-main5">
          <div className="home-branding">
            <div className="home-heading19">
              <h2 className="home-logo3">A website by Raghav Sharma.</h2>
            </div>
            <div className="home-socials2"></div>
          </div>
          <div className="home-links2">
            <div className="home-list2"></div>
            <div className="home-list3"></div>
          </div>
          <div className="home-socials3">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-twitter2 social button"
            >
              <img
                alt="image"
                src="/Icons/twitter.svg"
                className="home-image21"
              />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-discord2 social button"
            >
              <img
                alt="image"
                src="/Icons/discord.svg"
                className="home-image22"
              />
            </a>
          </div>
        </div>
        <img alt="image" src="/Icons/discord.svg" className="home-image23" />
        <span className="home-text56">
          <span>Jethalal.exe</span>
          <br></br>
          <span>18.1.7.8.1.22.exe</span>
        </span>
        <span className="home-copyright">© 2025 All Rights Reserved.</span>
      </footer>
      <div>
        <div className="home-container6">
          <Script
            html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
