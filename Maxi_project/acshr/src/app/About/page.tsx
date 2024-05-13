import React from "react";
import Link from "next/link";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";

const About = () => {
  return (
    <main>
      {/* navbar */}
      <Navbar />
      <div className="about_hero">
        <center>
          <h1 className="text-8xl pt-64 text-white font-bold font-mono">
            Who we are
          </h1>
        </center>
      </div>

      <div className="about_body flex mt-12  items-center justify-center px-24">
        <div className="about_hero_text">
          <p className="text-xl">
            <strong className="text-xl">
              Alliance of the Civil Society for Human Rights (ACSHR)
            </strong>{" "}
            is a national level of NGO. It was founded in February 2010 in
            Karachi. It is a Humanitarian and development organization by local
            Pakistani intellectual and community members. The purpose is to
            provide sustainable livelihoods intervention opportunities to
            support the most vulnerable communities both in urban and rural
            areas of Pakistan consequently will have access to better education,
            adequate primary health care and employment opportunities respect
            the ideals of human rights, peace, good governance and eventually
            improved sustainable community development. The Organization is
            registered from the office of Sub-registrar of Gulshan I Iqbal town
            Karachi. Subsequently to consultative meetings in Karachi, the
            founders responded to the urgent need of Pakistani people and made
            the platform named as Alliance of the Society for Human Rights
            (ACSHR). ACSHR's humanitarian and development intervention programs
            are holistic, people centered community based and sustainable.
            Therefore, sustainable livelihood approaches are adopted for all
            ACSHR strategic and short term programs. ACSHR sustainable
            livelihood program interventions only add to the current
            humanitarian and development commitments in Pakistan by utilizing
            principally home ground solutions to vulnerable community challenges
            and needs. ACSHR corresponds to the existing international and
            national humanitarian and development strategies.
          </p>
          <ul className="mt-5 text-xl list-disc">
            The Organization puts into operation participatory approaches,
            strategic planning and community mobilization to find solutions to
            community problems. It offers a range of programming and support in:
            <li className="mx-12 mt-5"> Emergency Relief Response.</li>
            <li className="mx-12"> Food Security and Livelihoods.</li>
            <li className="mx-12"> Health.</li>
            <li className="mx-12"> Formal Education.</li>
            <li className="mx-12"> WASH.</li>
            <li className="mx-12"> Youth Capacity Development Programs.</li>
            <li className="mx-12"> Gender.</li>
            <li className="mx-12"> Interfaith Harmony.</li>
            <li className="mx-12 mb-5"> Human Rights</li>
            Since inception, the organization was successful to implement a
            number of emergency and development projects in cooperation with the
            locals and international agencies. These projects benefitted a large
            number of the most vulnerable communities. It created credibility,
            good track record and close collaboration with all stakeholders. It
            has now transformed a well-established NGO competent of implementing
            multiple projects simultaneously
          </ul>
          <center><h1 className=" team_text mt-12  font-bold text-5xl font-mono">Our Inspirational Team</h1></center>
          <div className="team"></div>
          <div className="core_value flex">
            <div className="about_core_value_text">
              <p className="mt-12 text-lime-600 font-bold text-5xl font-mono space-x-12">
                CORE VALUES AND PRINCIPLES :
              </p>
              <ul className="mt-5 text-xl list-disc">
                <li className="mx-12 ">
                  Respect the unique and inherent worth of all individuals.
                </li>
                <li className="mx-12"> Moral and ethical integrity.</li>
                <li className="mx-12"> Fairness and equality.</li>
                <li className="mx-12"> Good governance.</li>
                <li className="mx-12">
                  Honesty, transparency and accountability of stakeholders.
                </li>
                <li className="mx-12"> Communication and collaboration.</li>
                <li className="mx-12"> Environmental conscious.</li>
                <li className="mx-12"> Independence.</li>
                <li className="mx-12 mb-8"> Solidarity with the poor.</li>
              </ul>
            </div>
            <div className="about_core_value_img mt-12"></div>
          </div>

          <p className="development text-xl">
            <strong className="text-1xl">ACSHR</strong> applies sustainable
            livelihoods approaches that provide a framework for addressing
            poverty and vulnerability in both development and humanitarian
            contexts. They have emerged from the growing realization of the need
            to put the poor and all aspects of their lives and means of living
            at the center of development and humanitarian work, while
            maintaining the sustainability of natural resources for present and
            future generations.
            <br />
            <br />
            <ul className="list-disc">
              Sustainable livelihoods objectives aim to increase the
              sustainability of poor people's livelihoods through promoting:
              <li className="mx-12 mt-6">
                Improved access to high-quality education,
                information,technologies and training and better nutrition and
                health.
              </li>
              <li className="mx-12">
                A more supportive and cohesive social environment.
              </li>
              <li className="mx-12">
                More secure access to, and better management of, natural
                resources.
              </li>
              <li className="mx-12 mb-6">
                Better access to basic and facilitating infrastructure.
              </li>
            </ul>
          </p>

          <p>
            
            <center>
              <div className="focus_areas_img"></div>
            </center>
            <br />
            <ol className="list-decimal text-xl ">
              <strong>ACSHR</strong> focuses on the following core program
              areas: <br /> <br />
              <li className="text-lime-600">
                <b>AGRICULTURE AND LIVELIHOODS PROGRAM</b>
              </li>
              <p className="mx-12 leading-8 mt-6 pr-12 text-black mb-1">Protect and improve household food security, including asset base, through increasing access and 
availability to food and means of production. Rehabilitation of agricultural sites and people 
associated with agricultural business.</p>

              <li className="text-lime-600">
                <b>FORMAL EDUCATION</b>
                <ul className=" text-xl list-disc">
                  <li className="mx-12 leading-8 mt-6 pr-12 text-black">
                    Increase enrolment and retention of school going population
                    (aged between 5-18 years) with emphasis on gender equity and
                    inclusiveness while address socio-cultural barriers that
                    hinder the enrolment of girls and children with special
                    needs through community mobilization and sensitization, and
                    by combating violence in the school place
                  </li>
                  <li className="mx-12 leading-8 pr-12 text-black">
                    Facilitate the integration HIV prevention education for
                    teachers, youth and children into education.
                  </li>
                  <li className="mx-12 leading-8 pr-12 text-black">
                    Improve teacher competence through in-service training,
                    mentoring and provision of basic incentives.
                  </li>
                  <li className="mx-12 leading-8 pr-12 text-black">
                    Provide psychosocial training to teachers in emergency
                    affected areas and psychosocial outreach to children through
                    child-friendly spaces and integrate life-skills based
                    approaches.
                  </li>
                  <li className="mx-12 leading-8 mb-6 pr-12 text-black">
                    Facilitate the availability of adequate and relevant basic
                    education materials, kits and supplies.
                  </li>
                </ul>
              </li>
              <li className="text-lime-600">
               <b> HEALTH CARE PROGRAM</b>
                <ul className="list-disc text-xl">
                  <li className="mx-12 leading-8 pr-12 mt-6 text-black">
                    Improve availability of and access to health care services
                    for communities, with special focus on vulnerable groups
                    such as women and children, through mobile clinics or
                    strengthening of existing services, as well as through the
                    promotion of health-seeking behavior.
                  </li>
                  <li className="mx-12 leading-8 pr-12 text-black">
                    Improve quality of health care and treatment, including
                    malnutrition with special focus on health infrastructure
                    (physical equipment and supplies, including drugs for
                    malnutrition treatment and human resource capacity).
                  </li>
                  <li className="mx-12 leading-8 pr-12 text-black">
                    Improve health information management system to ensure
                    availability of reliable data on the health status of the
                    population.
                  </li>
                  <li className="mx-12 leading-8 mb-6 pr-12 text-black">
                    Ensure availability of health education material on
                    prevention of targeted diseases (malaria, TB, AWD,
                    HIV/AIDS).
                  </li>
                </ul>
              </li>
              <li className="text-lime-600">
               <b> NUTRITION PROGRAM</b>
                <ul className="list-disc text-xl">
                  <li className="mx-12 leading-8 mt-6 pr-12 text-black">
                    The overall objectives is to lower the incidence of
                    malnutrition avert excess mortality due to malnutrition and
                    promote better nutritional status among populations in the
                    affected areas.
                  </li>
                  <li className="mx-12 leading-8  pr-12 text-black">
                    Initiate and facilitate intensive SFPs, including
                    community-based nutrition actions ,to the access of
                    nutritionally vulnerable populations to emergency nutrition
                    response.
                  </li>
                  <li className="mx-12 leading-8 mb-6 pr-12 text-black">
                    Promote appropriate infant and young child feeding
                    practices.
                  </li>
                </ul>
              </li>
              <li className="text-lime-600">
              <b>  ADVOCACY PROGRAM</b>
                <ul className="list-disc text-xl">
                  <li className="mx-12 leading-8 mt-6 pr-12 text-black">
                    {" "}
                    Effective advocacy with relevant stakeholders and parties to
                    conflict to promote adherence to human rights law with
                    emphasis on humanitarian concerns.
                  </li>
                  <li className="mx-12 leading-8  pr-12 text-black">
                    Institutional capacity building of Government and civil
                    society entities at all levels for effective prevention of
                    and response to protection challenges with a particular
                    focus on the most vulnerable.
                  </li>
                  <li className="mx-12 leading-8  pr-12 text-black">
                    Human-rights based approaches are mainstreamed in the
                    program design and delivery of all ACSHR programs.
                  </li>
                  <li className="mx-12 leading-8  pr-12 text-black">
                    Community capacity enhanced for protection of the most
                    vulnerable.
                  </li>
                  <li className="mx-12 leading-8 mb-6 pr-12 text-black">
                    Facilitate the availability of conducive environment for
                    durable solutions for protracted displaced populations.
                  </li>
                </ul>
              </li>
              <li className="text-lime-600">
                <b> WASH (WATER , SANITATION AND PROMOTION OF HYGIEN)</b>
                <ul className="list-disc text-xl">
                  <li className="mx-12 leading-8 mt-6 pr-12 text-black">
                    Increase access to sustainable water and sanitation services
                    to reach the most vulnerable targeted areas and population.
                  </li>
                  <li className="mx-12 leading-8  pr-12 text-black">
                    Increase awareness among target population and support in
                    connection with safe environment and hygiene issues.
                  </li>
                  <li className="mx-12 leading-8 mb-6 pr-12 text-black">
                    Empower local community institutions and WASH authorities in
                    target areas in managements of water and sanitation
                    facilities.
                  </li>
                </ul>
              </li>
              <li className="text-lime-600">
               <b> YOUTH CAPACITY BUILDING</b>
                <ul className="list-disc text-xl">
                  <li className="mx-12 leading-8 mt-6 pr-12 text-black">
                    To stimulate community development and transformation by
                    offering the youth in the target area access to vital
                    information and other basic educational activities that will
                    raise their awareness about urgent development issues ;and
                    strengthen their participation and decision-making within
                    the society on matters affecting their own lives.
                  </li>
                  <li className="mx-12 leading-8  pr-12 text-black">
                    Establishment of centers to help the target youth groups,
                    public and community-based organizations access affordable
                    information technology services.
                  </li>
                  <li className="mx-12 leading-8  pr-12 text-black">
                    Provide training facilities and assist establish youth
                    forums, to enable them meet regularly, discuss, exchange and
                    share ideas, learn about themselves and others. Understand
                    their own problems, and identify their needs in relation to
                    their existing social, political, cultural and religious
                    structures, and take actions to direct and control their own
                    future destiny.
                  </li>
                  <li className="mx-12 leading-8  pr-12 text-black">
                    Discourage the youth from becoming members of armed
                    militias, and organizations, with negative ideologies, by
                    providing them with skills for alternative source of income
                    generation including computer skills, entrepreneurship
                    skills, enhancement of English language ability, management
                    skills for youth organizations, leadership skills and
                    learning of non-violent ways of living and resolving
                    conflicts, through training, and appropriate reading
                    materials.
                  </li>
                  <li className="mx-12 leading-8  pr-12 text-black">
                    Encourage and assist the youth for equal opportunities to
                    express their views, fully participate in development
                    activities, and grow up with good human behaviors that can
                    suit modern societies, on their own terms, through
                    establishment of youth debate clubs, production of youth
                    newsletter, magazines, entertainment facilities, and become
                    updated by accessing appropriate information
                  </li>
                  <li className="mx-12 leading-8  pr-12 text-black">
                    Enhance the target youths' knowledge and literacy levels by
                    providing access to educational information and appropriate
                    reading materials through well-equipped library services,
                    reading clubs and audio-cassette listening forums etc.
                  </li>
                  <li className="mx-12 leading-8  pr-12 text-black">
                    Enhance the academic English language performance of
                    students at primary, secondary and tertiary institutions
                    through access to reading materials, participation of
                    inter-school debate clubs and reading clubs.
                  </li>

                  <li className="mx-12 leading-8 mb-6 pr-12 text-black">
                    Strengthen and enhance the capacities and performance of
                    community- based youth organizations through accessibility
                    to modern development books and materials, and training
                    programs.
                  </li>
                </ul>
              </li>
              <li className="text-lime-600">
               <b> GENDER</b>
                <ul className="list-disc text-xl">
                  <li className="mx-12 leading-8 mt-6 pr-12 text-black">
                    One of the realities that we need to remember and address is
                    that, when women “trespass” in spaces that were previously
                    completely male-dominated there is often a penalty. In
                    education and in the workplace that backlash often takes the
                    form of sexual harassment, humiliation, violence.
                  </li>
                  <li className="mx-12 leading-8  pr-12 text-black">
                    Supporting women in non-traditional jobs is crucial in not
                    only making long-lasting change in their lives but also help
                    break social taboos.
                  </li>
                  <li className="mx-12 leading-8  pr-12 text-black">
                    A proven way to overcome many systemic barriers to a woman's
                    success has been increased participation by women in local,
                    regional and national legislation as empowered change
                    agents.
                  </li>
                  <li className="mx-12 leading-8  pr-12 text-black">
                    When mothers are educated and empowered to make choices in
                    their lives, they enable their daughters to go to school.
                  </li>
                  <li className="mx-12 leading-8  pr-12 text-black">
                    There has been much progress in increasing access to
                    education, but progress has been slow in improving the
                    gender sensitivity of the education system, including
                    ensuring textbooks promote positive stereotypes.
                  </li>
                  <li className="mx-12 leading-8 mb-6 pr-12 text-black">
                    If we want girls to be able to complete education, we have
                    to end child marriage. We also have to seriously address
                    sexual harassment of girls.
                  </li>
                </ul>
              </li>
              <li className="text-lime-600">
               <b> INTERFAITH HARMONY</b>
                <ul className="list-disc text-xl">
                  <li className="mx-12 leading-8 mt-6 pr-12 text-black">
                    Providing strategies and solutions for Inter-Faith Harmony
                    in accordance with the Basic Islamic Sources.
                  </li>
                  <li className="mx-12 leading-8  pr-12 text-black">
                    Create social awareness and improve collective common sense
                    in the society regarding Inter-Faith Harmony.
                  </li>
                  <li className="mx-12 leading-8  pr-12 text-black">
                    Develop mutual understanding among different religious sects
                    of the society.
                  </li>
                  <li className="mx-12 leading-8  pr-12 text-black">
                    Eliminate the sense of insecurity and injustice among the
                    religious minorities.
                  </li>
                  <li className="mx-12 leading-8  pr-12 text-black">
                    To ensure social justice and fair distribution of
                    socio-economic resources.
                  </li>
                  <li className="mx-12 leading-8  pr-12 text-black">
                    Create an environment of fore-bearance, tolerance and
                    co-existence in the society.
                  </li>
                  <li className="mx-12 leading-8  pr-12 text-black">
                    To suggest the actions and steps for the revival of Islamic
                    concept related to Inter-Faith Harmony.
                  </li>
                  <li className="mx-12 leading-8  pr-12 text-black">
                    Highlight the role of media in the promotion of Inter-Faith
                    Harmony.
                  </li>
                  <li className="mx-12 leading-8 mb-6 pr-12 text-black">
                    Highlight the role of Universities, Religious Institutions,
                    Governments, Religious Scholars, Civil Societies, Judiciary
                    and Legislation Institutions to address the challenges to
                    Inter-Faith Harmony.
                  </li>
                </ul>
              </li>
              <li className="text-lime-600">
               <b> HUMANITARIAN RESPONSE</b>
                <ul className="list-disc text-xl">
                  <li className="mx-12 leading-8 mt-6 pr-12 text-black">
                    The ACSHR focuses on supporting the needs of people in
                    Pakistan including refugees, facing a series of overlapping
                    emergencies, including extreme weather events and the
                    COVID-19 pandemic.
                  </li>
                  <li className="mx-12 leading-8  pr-12 text-black">
                    The ACSHR has a multi-sectoral approach covering the themes
                    of health, education, protection, food security, shelter,
                    water, sanitation and hygiene (WASH), and refugees
                  </li>
                  <li className="mx-12 leading-8 mb-6 pr-12 text-black">
                    The ACSHR also focuses on the lifesaving response activities
                    including food security and livelihood assistance, nutrition
                    programs, primary health services, including water and
                    sanitation, women's health, and education support, as well
                    as shelter for displaced people.
                  </li>
                </ul>
              </li>
              <li className="text-lime-600">
                 <b>HUMAN RIGHTS</b>
                <ul className="list-disc text-xl text-black"><br />The ACSHR is committed to emphasize respect for human rights and focuses on the following;
                  <li className="mx-12 leading-8 mt-6 pr-12 text-black">Right to health</li>
                  <li className="mx-12 leading-8  pr-12 text-black">Worker's right</li>
                  <li className="mx-12 leading-8  pr-12 text-black">Right of education</li>
                  <li className="mx-12 leading-8  pr-12 text-black">Freedom of expressions</li>
                  <li className="mx-12 leading-8  pr-12 text-black">Violence against women & girls.</li>
                  <li className="mx-12 leading-8  pr-12 text-black">Freedom of religion & belief.</li>
                  <li className="mx-12 leading-8 mb-6 pr-12 text-black">Valuing diversity.</li>
                </ul>
              </li>
            </ol>
          </p>
          {/* explore button */}
      <p  className="explore_side_btn text-2xl  mt-3 text-lime-600 font-bold p-2">
          <Link href="/About/Explore">Explore</Link>
        </p> <br /> <br />
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default About;
