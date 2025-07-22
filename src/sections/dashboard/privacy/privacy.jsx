/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import React from 'react';

import { Box, Link, List, useTheme, ListItem, Container, Typography, useMediaQuery } from '@mui/material';

const Privacy = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const SectionTitle = ({ children }) => (
    <Typography variant={isMobile ? "h6" : "h5"} component="h2" sx={{ fontWeight: 500, mb: 2, fontSize: isMobile ? '20px !important' : '24px !important' }}>
      {children}
    </Typography>
  );

  const SectionContent = ({ children }) => (
    <Typography variant="body1" sx={{ mb: 3, textAlign: 'justify', fontSize: '16px !important', fontWeight: '400 !important' }}>
      {children}
    </Typography>
  );

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <Box>
        <Box mb={4}>
          <SectionTitle>Introduction</SectionTitle>
          <SectionContent>
            Subscription data and certain other personal information are subject to our privacy policy.
            By using our services, you consent to the collection, use, and disclosure of this
            information in accordance with our privacy policy, including its transfer to other countries
            for storage, processing, and use by planora.ca, its affiliates, or any third party to
            provide you with services.
          </SectionContent>
        </Box>

        <Box mb={4}>
          <SectionTitle>International use</SectionTitle>
          <SectionContent>
            We make no representation as to the appropriateness or availability of the content of this
            site outside of Canada. If you access this site from another location, you acknowledge that
            you do so on your own initiative and are solely responsible for complying with local laws.
          </SectionContent>
        </Box>

        <Box mb={4}>
          <SectionTitle>Exclusions and limitations</SectionTitle>
          <SectionContent>
            Some jurisdictions do not allow the exclusion of certain warranties, representations, or
            conditions, or the limitation or exclusion of liability for incidental or consequential
            damages. Therefore, some of the above limitations may not apply to you.
          </SectionContent>
        </Box>

        <Box mb={4}>
          <SectionTitle>Waiver and Severability Of Terms</SectionTitle>
          <SectionContent>
            Failure to exercise or enforce any right or provision of these terms shall not constitute a
            waiver of such right or provision. If any provision of these terms is found by a competent
            court to be invalid, you agree that the court should endeavor to give effect to the
            intention of that provision, and the other provisions of these terms remain in full force
            and effect.
          </SectionContent>
        </Box>

        <Box mb={4}>
          <SectionTitle>Force Majeure</SectionTitle>
          <SectionContent>
            Planora.ca shall not be liable for the total or partial non-performance of its obligations
            towards you, nor for any damages or losses you may suffer, if such non-performance, damages,
            or losses result from a force majeure event or circumstances beyond its control.
          </SectionContent>
        </Box>

        <Box mb={4}>
          <SectionTitle>GENERAL BY CONTINUING TO USE PLANORA.CA, YOU AGREE TO ABIDE BY THESE TERMS.</SectionTitle>
          <SectionContent>
            Headings in each section of these terms are for convenience or reference purposes only and
            shall not be considered in interpreting these terms. Planora Inc. is aware of the concerns
            raised regarding the privacy of personal information on the Internet and wishes to work with
            you to ensure the respect and protection of your privacy. Therefore, we want to explain to
            you what type of information we collect when you visit the planora.ca website, as well as
            when, how, and why we collect this information. We encourage you to read the following lines
            carefully and to check them regularly to be informed of any potential changes.
          </SectionContent>
        </Box>

        <Box mb={4}>
          <SectionTitle>GENERAL PRINCIPLES</SectionTitle>
          <SectionContent>
            Planora Inc. is committed to respecting and preserving your right to privacy. In accordance
            with the personal information protection standards established by the Canadian Standards
            Association, we voluntarily adhere to the Model Code for the Protection of Personal
            Information. Our consumer privacy policy (the "Policy") details how we collect, use,
            disclose, and manage your personal information. You understand that we reserve the right to
            modify this Policy at any time, without notice, and that the revised version will be
            available on our website. We encourage you to regularly review the Policy to stay informed
            of any changes. By continuing to use our website after the publication of the revised
            Policy, you accept the terms of the Policy. Please note that our site may contain links to
            other websites that are not operated by planora.ca, for which we disclaim any responsibility
            for privacy practices or content.
          </SectionContent>
        </Box>

        <Box mb={4}>
          <SectionTitle>INFORMATION WE COLLECT</SectionTitle>
          <SectionContent>
            Planora Inc. may collect information about you when you register as a member of the website.
            Additionally, we collect aggregated data as well as user-specific information regarding
            pages visited, survey responses, and participation in contests. While browsing planora.ca,
            various data may be automatically collected, including:
            <List>
              <ListItem>Your IP address;</ListItem>
              <ListItem>The type of browser and operating system used;</ListItem>
              <ListItem>Pages visited before and after visiting planora.ca;</ListItem>
              <ListItem>Your interactions in community discussions;</ListItem>
              <ListItem>Pages viewed, ads seen, and links clicked on the site;</ListItem>
              <ListItem>Your searches on planora.ca and the use of the results obtained;</ListItem>
              <ListItem>Your use of services offered on planora.ca, as well as their frequency;</ListItem>
              <ListItem>
                Your response to offers and advertisements on planora.ca, including those from third-party
                sites;
              </ListItem>
              <ListItem>The speed of your Internet connection and information about installed software;</ListItem>
              <ListItem>Aggregate data on ad clicks in emails and video views;</ListItem>
              <ListItem>
                Server log information and data collected through technologies such as HTML and Flash
                cookies, web beacons, and other similar technologies.
              </ListItem>
            </List>
          </SectionContent>
        </Box>

        <Box mb={4}>
          <SectionTitle>ADVERTISING</SectionTitle>
          <SectionContent>
            On Planora, we display or may display advertising to enhance the experience of our readers.
            To make this online experience more personalized for you, some ads you see may be tailored
            to your preferences based on information collected by cookies, web beacons, and other
            sources such as ad networks. This personalization allows us to offer content and
            advertisements tailored to your interests on Planora. Through this process, advertisers can
            target Planora visitors most interested in their products, exposing you to ads for products
            or services that may interest you. Additionally, targeted ads may be served on Planora by
            third-party advertisers and ad platforms. It is important to note that the privacy practices
            of third parties collecting data on Planora are not governed by our privacy policy.
          </SectionContent>
        </Box>

        <Box mb={4}>
          <SectionTitle>STATISTICAL ANALYSIS</SectionTitle>
          <SectionContent>
            We gather and analyze collected data to better understand the usage of Planora. We may use
            this information to monitor and analyze activity on Planora, improve its operation, and
            adjust its content and design to better meet the needs of our visitors.
          </SectionContent>
        </Box>

        <Box mb={4}>
          <SectionTitle>PURCHASES</SectionTitle>
          <SectionContent>
            Planora may also obtain information about you when purchasing services or products by mail,
            fax, or online. This information may include your name, address, company name, telephone
            number, fax number, email address, and details of your credit card.
          </SectionContent>
        </Box>

        <Box mb={4}>
          <SectionTitle>COMPLAINTS</SectionTitle>
          <SectionContent>
            Planora may collect information about you if you submit a complaint or request as a
            consumer. The information collected may include your name, address, telephone number, email
            address, date of birth, and details of the complaint or request.
          </SectionContent>
        </Box>

        <Box mb={4}>
          <SectionTitle>MARKET RESEARCH</SectionTitle>
          <SectionContent>
            Additionally, Planora may collect information about you if you have participated in market
            studies conducted by Planora. The information collected may include your name, address,
            telephone number, email address, gender, income, and details about your purchasing habits
            and preferences.
          </SectionContent>
        </Box>

        <Box mb={4}>
          <SectionTitle>CONTESTS AND PROMOTIONS</SectionTitle>
          <SectionContent>
            Finally, Planora may collect information about you if you participate in a contest or
            promotion organized by Planora or one of its partners. Additionally, Planora may sometimes
            ask you, through these forms, if you wish to receive information about other services,
            contests, or news concerning Planora or its partners. You always have the option to decline
            this request or unsubscribe from any personalized service you have previously chosen. The
            information collected may include your name, address, telephone number, email address, date
            of birth, and details regarding your participation in the contest or promotion.
          </SectionContent>
        </Box>

        <Box mb={4}>
          <SectionTitle>OTHER SOURCES</SectionTitle>
          <SectionContent>
            We may obtain additional information about you from third-party sources and platforms (such
            as social networks, databases, Internet marketing, and targeted advertising companies),
            including:
            <List>
              <ListItem>
                If you use third-party social network services (such as Facebook Connect or Twitter) from
                Planora, your username and connection lists for those services;
              </ListItem>
              <ListItem>Demographic data such as age group, gender, and interests;</ListItem>
              <ListItem>
                Data on ad interaction and viewing, such as ad click rates and how often you viewed a
                specific ad;
              </ListItem>
              <ListItem>
                And unique identifiers, including mobile device identification numbers, which may be used
                to determine the physical location of those devices in accordance with applicable law.
              </ListItem>
            </List>
            Please note that Planora may merge the information we collect with that obtained from third
            parties.
          </SectionContent>
        </Box>

        <Box mb={4}>
          <SectionTitle>USE OF PERSONAL INFORMATION</SectionTitle>
          <SectionContent>
            Planora uses your personal data for one or more of the following purposes: (1) to identify
            you; (2) to improve website content; (3) to personalize website content or presentation for
            users; (4) to inform users of website updates; (5) to communicate with users for marketing
            purposes; (6) to improve its products and services; (7) to process and provide your products
            and services; (8) to manage your claims or requests as a user.
          </SectionContent>
        </Box>

        <Box mb={4}>
          <SectionTitle>COOKIES</SectionTitle>
          <SectionContent>
            Cookies are simple text files placed by web browsers on computer hard drives when sites are
            visited. They cannot damage files or read information stored on the user's hard drive.
            Planora uses cookies to measure visits, average visit duration, pages viewed, and other
            statistics related to the use of our website. These cookies present no security risk as they
            do not contain any personal information, only a special string of characters informing the
            service that you have previously used the site. No personal information is stored in
            cookies. Please note that some features of the site may not function properly if you do not
            accept cookies. Therefore, we recommend accepting all cookies sent by Planora. You can
            disable cookie warnings by adjusting your browser preferences or options and disabling the
            warning option.
          </SectionContent>
        </Box>

        <Box mb={4}>
          <SectionTitle>SECURITY MEASURES</SectionTitle>
          <SectionContent>
            Planora Inc. recognizes the crucial importance of protecting your personal data and uses the
            most advanced Internet security protocols to secure information collected via the website.
            However, it is important to note that the Internet is not a completely secure means of
            communication. Therefore, Planora Inc. cannot guarantee the absolute security of the
            personal information you provide via the website, and you understand that you do so at your
            own risk. Additionally, please be aware that voluntary disclosure of personal information
            during online discussions, comments, via email, or on forums is not covered by our privacy
            policy. Therefore, you should always exercise caution when sharing personal information in
            this manner, as such information may be collected and used by third parties without your
            prior consent. Ultimately, if you publish personal information online and make it accessible
            to the public, you may receive unsolicited messages from third parties. Planora Inc.
            disclaims any liability in this regard and encourages you to remain vigilant and cautious in
            your online interactions.
          </SectionContent>
        </Box>

        <Box mb={4}>
          <SectionTitle>YOUR CONSENT</SectionTitle>
          <SectionContent>
            Unless stated otherwise, Planora Inc. undertakes not to sell, transfer, or disclose your
            personal information to third parties without your consent. However, certain personal data
            may be shared with third parties solely for the purpose of processing your subscription,
            order, complaint, or request. Additionally, Planora Inc. may share your personal information
            with third parties responsible for managing contests, promotions, and online activities on
            its behalf. Furthermore, Planora Inc. may be obligated to disclose your personal information
            in response to a search warrant, ongoing investigation, valid legal order, or to a law
            enforcement agency in cases of contract violation or unlawful activity, or if such
            disclosure is required by law. Similarly, Planora Inc. may share personal information in the
            context of debt recovery that you owe to them.
          </SectionContent>
        </Box>

        <Box mb={4}>
          <SectionTitle>THIRD-PARTY SERVICES</SectionTitle>
          <SectionContent>
            To enhance your experience on planora.ca and simplify the subscription process, we offer you
            the option to connect or interact with third-party services such as Facebook and Instagram.
            When you use these third-party services to connect to planora.ca, we may transmit
            information about you to the providers of these services, who may in turn transmit
            information about you to us. When you authorize us to access your data via a third-party
            service to create a profile on the site, we may use this data for various purposes,
            including:
            <List>
              <ListItem>
                Establishing automatic links in our system: For example, if you connect to us via a
                service with a public friends list, such as Facebook, we may check if some of your
                Facebook friends are also members of planora.ca. If we find a match, we may copy your
                Facebook relationship with these members by allowing them to become your fans,
                subscribers, or friends on our site.
              </ListItem>
              <ListItem>
                Suggesting relationships: For example, if you connect via a service with a private contact
                list (such as Google and Yahoo!), we may check which of your contacts are site members and
                suggest that you become a fan of these users. This process is not automatic; you must
                choose to become a fan of the suggested users.
              </ListItem>
              <ListItem>
                Compiling a list of potential friends to whomListItem
                Compiling a list of potential friends to whom you can send emails: When users share
                content with their friends using, for example, the site's "Send to a Friend" function, we
                may use third-party friend lists to compile a list of contacts to whom you could send an
                email.
              </ListItem>
              <ListItem>
                Compiling a list of potential friends to whom you can send messages on specific services:
                For example, we may use third-party friend lists to compile a list of contacts to whom you
                could send an invitation to watch an interactive presentation.
              </ListItem>
              <ListItem>
                Improving and personalizing your experience on the site: When you log in via a third-party
                service, we may access certain information from your account, such as your profile
                picture, popular news from your network, and your friends' comments on certain articles or
                blog posts, to improve and personalize your experience on planora.ca.
              </ListItem>
            </List>
          </SectionContent>
        </Box>

        <Box mb={4}>
          <SectionTitle>GUIDELINES CONCERNING CHILDREN</SectionTitle>
          <SectionContent>
            We do not knowingly collect personal data from children under the age of 13. If we discover
            that we have inadvertently collected personal data about a child under 13 without verifiable
            parental consent, we will delete this data from our records as soon as possible. If you
            believe that we may have collected data about a child under 13, please contact us.
          </SectionContent>
        </Box>

        <Box mb={4}>
          <SectionTitle>CHANGES TO THE PRIVACY POLICY</SectionTitle>
          <SectionContent>
            We reserve the right to update this privacy policy at any time to reflect changes in our
            practices and services. If you continue to use planora.ca after being informed of the
            changes, it means you consent to the new terms of the privacy policy and accept them. If you
            do not agree with the changes made or with the new terms of the policy, you must immediately
            stop using planora.ca.
          </SectionContent>
        </Box>

        <Box mb={4}>
          <SectionTitle>HOW TO CONTACT PLANORA.CA</SectionTitle>
          <SectionContent>
            If you prefer not to receive emails from planora.ca, you can update your communication
            preferences on the website. You can also contact us at the following email address:
            info@planora.ca. If you wish to review or update the personal information in your customer
            account, withdraw your consent for the collection, use, or disclosure of your personal
            information, or for any other request, please contact us via the "Contact Us" section.
          </SectionContent>
        </Box>

        <Box mb={4}>
          <SectionTitle>COOKIES</SectionTitle>
          <SectionContent>
            We use cookies to enhance your user experience and provide enriched and personalized
            content. A cookie, also known as a "cookie," is a text file that can be saved on a terminal
            such as a computer, tablet, or smartphone when you visit a service using browsing software.
            This cookie allows its issuer to recognize the terminal concerned each time it accesses
            digital content containing cookies from the same issuer, and this, during its validity
            period. The user is informed that cookies are installed on their receiving terminal, whether
            it be a computer, tablet, smartphone, etc., during their connections to the site or
            applications and when using the services. These cookies are necessary to ensure the proper
            functioning of the services, or they may be installed on their browser based on the user's
            choices regarding cookies. This choice can be changed at any time.
          </SectionContent>
        </Box>

        <Box mb={4}>
          <SectionTitle>1. WHAT ARE THE PURPOSES OF COOKIES?</SectionTitle>
          <SectionContent>
            To better inform the user about cookies, it is useful to group them into 6 distinct
            categories:
            <List>
              <ListItem>
                Site and application navigation cookies: These cookies aim to improve the performance of
                services to offer the user an optimal experience on the site and applications. They do not
                require prior information or consent from the user to be deposited on their terminal. They
                allow, among other things: - to adapt the presentation of the site and applications to the
                display preferences of the terminal during visits; - to remember information related to
                filled forms or choices made by the user; - to provide access to their account or other
                reserved areas using their credentials; - to implement security measures, for example,
                when reconnection is necessary after a certain period.
              </ListItem>
              <ListItem>
                Audience measurement cookies: These cookies are used to establish statistics on the
                frequency and use of the site and applications, allowing the publisher to improve their
                interest and ergonomics.
              </ListItem>
              <ListItem>
                Advertising cookies: These cookies determine in real-time the advertisements to display
                based on the user's recent browsing on the site and applications, thus limiting the number
                of times they see the same advertisement and helping to measure the effectiveness of
                advertising campaigns.
              </ListItem>
              <ListItem>
                Behavioral analysis cookies: These cookies identify information that may interest the user
                to improve their navigation and make it more engaging. They may be associated with data
                provided by the user to send them electronic prospecting or display personalized
                advertisements on their terminal.
              </ListItem>
              <ListItem>
                Social media sharing cookies: These cookies allow the user to share editorial content and
                other content from the site on social networks. They are managed by the editor of the
                social network site, and the user is invited to consult the social network cookie
                management policy on the relevant sites.
              </ListItem>
              <ListItem>
                Adobe Flash Player "Flash" cookies: These cookies are used to store information about the
                playback and display preferences of users of multimedia content.
              </ListItem>
            </List>
          </SectionContent>
        </Box>

        <Box mb={4}>
          <SectionTitle>2. HOW CAN THE USER MANAGE COOKIES?</SectionTitle>
          <SectionContent>
            The user is informed that the publisher's partners and other third parties may place cookies
            on the site. Only the issuer of a cookie can read or modify the information it contains, and
            the publisher has no access or control over cookies used by third parties. The issuance and
            use of cookies by third parties are governed by their own privacy policies, in addition to
            the provisions of this Policy. Therefore, it is recommended that the user consults the
            websites of these third parties for more information on the cookies they use and how to
            manage them. Regarding consent for cookies, the user is deemed to have given their consent
            in the following cases:
            <List>
              <ListItem>
                By clicking on the "X" icon or the "I understand" button on the information banner visible
                during their first connection to the Site.
              </ListItem>
              <ListItem>
                By continuing their navigation, i.e., when they click on an element of the Site (image,
                link, "search" button, etc.) or go to another page of the Site.
              </ListItem>
            </List>
            If the user accepts the storing of cookies on their terminal via their browsing software,
            cookies integrated into the pages and content visited will be temporarily stored in a
            dedicated space on their terminal, readable only by their issuer. This consent given by the
            user is valid for a period of thirteen (13) months from the first deposit of cookies on the
            terminal equipment. In case of refusal to store cookies on their terminal or deletion of
            those already stored, the user is informed that their navigation and experience on the site
            or application may be limited. This could also affect the recognition, for technical
            compatibility purposes, of the type of browser used, language and display settings, or the
            country of Internet connection. The publisher declines any responsibility for consequences
            related to the degraded operation of services resulting from the user's refusal of cookies
            or the publisher's inability to store or access cookies necessary for their operation due to
            the user's choice. The user has the option to configure their browsing software to allow the
            storage of cookies on their terminal or, on the contrary, to refuse them, either
            systematically or according to the issuer. They can also choose to configure their browsing
            software to prompt them to accept or refuse cookies on a case-by-case basis before they are
            stored on their terminal. Methods for managing cookies and user preferences vary by browser.
            Detailed instructions for making these changes are available in the browser's help menu,
            allowing the user to understand how to adjust their cookie preferences.
          </SectionContent>
        </Box>

        <Box mb={4}>
          <SectionTitle>FOR INTERNET EXPLORER™:</SectionTitle>
          <Link href="http://windows.microsoft.com/en-US/windows-vista/Block-or-allow-cookies" target="_blank" rel="noopener noreferrer" sx={{ display: 'block', mb: 2 }}>
            http://windows.microsoft.com/en-US/windows-vista/Block-or-allow-cookies
          </Link>
        </Box>

        <Box mb={4}>
          <SectionTitle>FOR SAFARI™:</SectionTitle>
          <Link href="http://docs.info.apple.com/article.html?path=Safari/3.0/en/9277.html" target="_blank" rel="noopener noreferrer" sx={{ display: 'block', mb: 2 }}>
            http://docs.info.apple.com/article.html?path=Safari/3.0/en/9277.html
          </Link>
        </Box>

        <Box mb={4}>
          <SectionTitle>FOR CHROME™:</SectionTitle>
          <Link href="http://support.google.com/chrome/bin/answer.py?hl=en&hlrm=en&answer=95647" target="_blank" rel="noopener noreferrer" sx={{ display: 'block', mb: 2 }}>
            http://support.google.com/chrome/bin/answer.py?hl=en&hlrm=en&answer=95647
          </Link>
        </Box>

        <Box mb={4}>
          <SectionTitle>FOR FIREFOX™:</SectionTitle>
          <Link href="http://support.mozilla.org/en-US/kb/Enabling%20and%20disabling%20cookies" target="_blank" rel="noopener noreferrer" sx={{ display: 'block', mb: 2 }}>
            http://support.mozilla.org/en-US/kb/Enabling%20and%20disabling%20cookies
          </Link>
        </Box>

        <Box mb={4}>
          <SectionTitle>FOR OPERA™:</SectionTitle>
          <Link href="http://help.opera.com/Windows/10.20/en/cookies.html" target="_blank" rel="noopener noreferrer" sx={{ display: 'block', mb: 2 }}>
            http://help.opera.com/Windows/10.20/en/cookies.html
          </Link>
        </Box>

        <Box mb={4}>
          <SectionTitle>At any time, the user may choose to express and modify their preferences regarding cookies.</SectionTitle>
        </Box>

        <Box mb={4}>
          <SectionTitle>USER CHOICES EXPRESSED ONLINE EXERCISE YOUR CHOICE VIA OUR OPT-IN/OPT-OUT TOOLS AND THOSE OF OUR PARTNERS</SectionTitle>
          <SectionContent>
            Some cookies that we issue are provided by third-party providers. To learn more about their
            practices and to exercise your choice regarding these cookies, you can visit the following
            pages:
          </SectionContent>
        </Box>

        {[
          { name: "Clickso", url: "http://clickso.com/privacy_policy.html" },
          { name: "COMET", url: "http://coxmt.com/privacy-policy/" },
          { name: "District M", url: "https://districtm.net/en/page/data-and-privacy-policy/" },
          { name: "EMX", url: "https://emxdigital.com/privacy/" },
          { name: "Exponential", url: "http://exponential.com/privacy/" },
          { name: "Facebook", url: "https://www.facebook.com/about/privacy/cookies" },
          { name: "Fyber", url: "https://www.fyber.com/legal/privacy-policy/" },
          { name: "Google", url: "https://www.google.com/policies/technologies/cookies/" },
          { name: "GumGum", url: "https://gumgum.com/privacy-policy" },
          { name: "Google Doubleclick", url: "https://www.google.com/settings/ads/plugin?hl=fr" },
          { name: "Index Exchange", url: "http://www.indexexchange.com/privacy/" },
          { name: "juicemobile.com", url: "https://www.juicemobile.com/privacy/" },
          { name: "Oath", url: "https://policies.oath.com/us/en/oath/privacy/privacy/index.html" },
          { name: "OpenX", url: "https://www.openx.com/legal/privacy-policy/" },
          { name: "Pubmatic", url: "https://pubmatic.com/legal/privacy-policy/" },
          { name: "PulsePoint", url: "https://contextWeb.com/privacy-policy.html" },
          { name: "Rubicon Project", url: "https://rubiconproject.com/privacy-policy/" },
          { name: "Rhythmone", url: "https://www.rhythmone.com/privacy-policy#pMt22S8JThTajPF5.97" },
          { name: "SlimCut", url: "http://www.slimcutmedia.com/privacy-policy/" },
          { name: "Sortable", url: "https://sortable.com/privacy-legal/" },
          { name: "SpotX", url: "https://www.spotx.tv/privacy-policy/" },
          { name: "Sovrn", url: "https://www.sovrn.com/privacy-policy/" },
          { name: "Tremor Video", url: "http://tremorvideodsp.com/privacy-policy.html" },
        ].map((partner, index) => (
          <Box key={index} mb={2}>
            <Typography variant="h6" component="h3" gutterBottom>
              {partner.name}:
            </Typography>
            <Link href={partner.url} target="_blank" rel="noopener noreferrer" sx={{ display: 'block', wordBreak: 'break-word' }}>
              {partner.url}
            </Link>
          </Box>
        ))}

        <Box mb={4}>
          <SectionContent>
            PLANORA AND ITS PERSONAL INFORMATION PROTECTION OFFICER Planora Inc. has a personal
            information protection officer responsible for matters relating to privacy and data
            protection. This data protection officer can be contacted at the following address:
          </SectionContent>
        </Box>

        <Box mb={8}>
          <SectionContent>
            Planora Inc.Attn: Personal Information Protection Officer 518, Langlois Street Magog,
            Quebec, J1X 4X9 Canada info@planora.ca
          </SectionContent>
        </Box>
      </Box>
    </Container>
  );
};

export default Privacy;

