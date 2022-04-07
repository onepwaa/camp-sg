import {
  Box,
  Container,
  Heading,
  Button,
  Text,
  Input,
  Flex,
  Grid,
  Image,
  Link
} from 'theme-ui'
import Head from 'next/head'
import { useRouter } from 'next/router'
import fs from 'fs'
import path from 'path'
import Marquee from 'react-marquee-slider'

function GalleryImage({ src, ml, mr }) {
  return (
    <Image
      width={370}
      height={300}
      src={src}
      sx={{
        width: '370px',
        height: '200px',
        objectFit: 'cover',
        objectPosition: 'center',
        ml,
        mr,
        borderRadius: '12px'
      }}
    />
  )
}

export default function App({ photos }) {
  const router = useRouter()
  return (
    <Box>
      {router.query.signedup && (
        <Box
          bg={'#56ca53'}
          color={'white'}
          sx={{ textAlign: 'center', py: 2, fontWeight: 600, fontSize: 2 }}
        >
          Successfully signed up for Compute Singapore!
        </Box>
      )}
      <Head>
        <meta
          property="og:image"
          content="/header.jpg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/events/challenge.png"
        />
        <meta name="msapplication-TileColor" content="#4169E1" />
        <meta name="theme-color" content="#4169E1" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>WSCamp Singapore 2022</title>
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="description" content="Practice for WSC as it returns to Singapore." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:title" content="WSCamp Singapore 2022" />
      </Head>
      <Box
        sx={{
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          minHeight: '90vh',
          backgroundAttachment: 'fixed',
          backgroundPosition: '60%',
          backgroundImage:
            'linear-gradient(135deg, rgba(27, 48, 110,0.75) 45%, rgba(101, 12, 105,0.65) 100%), url(https://hackclub.com/pattern.svg),url(/header.jpg)'
        }}
      >
        <Container
          py={5}
          sx={{
            minHeight: '85vh',
            textAlign: 'left',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'left'
          }}
        >
          <Box sx={{ minWidth: ['200px', '400px', '600px'] }}>
            <Heading
              sx={{
                fontSize: [4, 5],
                fontWeight: 800,
                color: 'snow',
                WebkitTextStroke: 'currentColor',
                WebkitTextStrokeWidth: ['0.7px', '0.9px'],
                WebkitTextFillColor: 'rgba(255,255,255, 0.3)',
                letterSpacing: '2.5px',
                fontFamily: '"Fira Sans"'
              }}
            >
              WSCAMP SINGAPORE
            </Heading>
            <Heading
              color="white"
              sx={{
                fontSize: [4, 6],
                fontWeight: 800,
                my: 3,
                maxWidth: '920px'
              }}
            >
              Practice for WSC as it returns to Singapore.
            </Heading>
            <Box sx={{ color: 'white', fontSize: 2, my: 3 }}>
              Date & Time TBC <br />
              Venue TBC <br />
            </Box>
            <Flex>
              <Button
                as="a"
                href="#register"
                variant="lg"
                mr={3}
                sx={{ borderRadius: 4, p: 3 }}
              >
                Register
              </Button>
              <Button
                as="a"
                href="mailto:onepwaa@gmail.com"
                variant="lg"
                sx={{ borderRadius: 4, p: 3, bg: 'blue' }}
              >
                Contact Us
              </Button>
            </Flex>
          </Box>
        </Container>
      </Box>
      <Container>
        <br />
        <Heading as="h1" my={3}>
          What is World Scholars Cup?
        </Heading>
        <Box sx={{ maxWidth: '750px', fontSize: 2 }}>
          The World's Scholar Cup (abbreviated WSC) is an international team
          academic program with more than 15,000 students participating from
          over 65 countries every year. Before the outbreak of COVID-19, it ran
          a regional round in Singapore every year. Now in 2022, the Singapore
          Regional Round is returning. Each WSC round is made up of four
          academic events:
        </Box>
        <br />
        <Grid columns={[1, 2, 2]} sx={{ gap: ['24px', '24px', '24px'] }}>
          <Box sx={{ bg: 'sunken', p: 4, borderRadius: 8 }}>
            <img src="/events/challenge.png" style={{ height: '60px' }} />
            <Heading mt={2}>Scholar's Challenge</Heading>
            <Box mt={2}>
              It’s multiple choice, so make multiple choices. The Challenge
              looks like any other test, but with an alpaca-powered twist: you
              can mark more than one answer per question. The fewer you mark,
              the more points you can earn if you’re right. (Yes, that means you
              can finally guess C and D... and also A, B, and E.) Apply your
              knowledge of the six subjects successfully and you can win medals
              in one, two, or all of them.
              <br />
              <br />
              You’ll soon discover what all World Scholars do: that even if you
              think you’re an expert in science, you might do wonderfully in the
              arts, and that the best way to prepare for a test that touches on
              everything is to talk through it all with your team, day by day.
            </Box>
          </Box>
          <Box sx={{ bg: 'sunken', p: 4, borderRadius: 8 }}>
            <img src="/events/bowl.png" style={{ height: '60px' }} />
            <Heading mt={2}>Scholar's Bowl</Heading>
            <Box mt={2}>
              Every team in the theater. Every team with a clicker. Every
              question harder than the one before. Your team will work together
              to solve analytic questions and multimedia challenges. Click your
              answers before time runs out, and don’t be surprised if you’re
              asked to connect a poem you studied to a clip from Brooklyn
              Nine-Nine.
              <br /> <br />
              <b>It’s loud.</b> You might even hear a team shout the wrong
              answer— hoping you’ll click it. <b>It's strategic.</b> What will
              you and your teammates do when you disagree?
              <br /> <br />
              Remember, it's not the first team to answer correctly that gets
              all the credit. You’re all racing the clock. But, the clock is
              fast and the stakes are high.
            </Box>
          </Box>
          <Box sx={{ bg: 'sunken', p: 4, borderRadius: 8 }}>
            <img src="/events/writing.png" style={{ height: '60px' }} />
            <Heading mt={2}>Collaborative Writing</Heading>
            <Box mt={2}>
              Speak with the power of your pen (or pencil!) You’ll be given six
              prompts, from each of the six subject areas, ranging from creative
              scenarios to explore to persuasive arguments to make. Two easy
              rules to remember: as a team you only need to write three of the
              six, and each of you needs to answer a different prompt. You’ll
              first have time to prepare together, then time by yourself to
              write the most compelling piece possible, then one last chance to
              review one another's work at the end. Whether you craft a poem or
              compose a five-paragraph essay, make sure your work excites and
              challenges you, because that means it'll excite and challenge your
              reader too. At the end of WSCamp, you'll get written feedback on
              your piece.
            </Box>
          </Box>
          <Box sx={{ bg: 'sunken', p: 4, borderRadius: 8 }}>
            <img src="/events/debate.png" style={{ height: '60px' }} />
            <Heading mt={2}>Team Debate</Heading>
            <Box mt={2}>
              Each team debates three times, on motions across all the subjects,
              from policy to poetry. You may be arguing whether parents should
              have access to surveillance cameras at schools—or whether women
              make better superheroes. Debate is your chance to apply all that
              you’ve learned to make the most persuasive case you can. And, win
              or not, after each debate, you’ll receive feedback on how to
              improve.
              <br /> <br />
              Each of you will speak up to 4 minutes. But first, you’ll have 15
              minutes to research your argument, with full access to the
              Internet. Use your time—and choose your sources—wisely!
            </Box>
          </Box>
        </Grid>
        <Box sx={{ maxWidth: '750px', fontSize: 1, mt: 3 }}>
          <i>Descriptions and drawings adapted from World Scholar's Cup.</i>
        </Box>
      </Container>
      <br />
      <Box my={3}>
        <Marquee velocity={25}>
          {photos.slice(0,10).map(photo => (
            <GalleryImage ml={4} mr={0} src={"/penang/" + photo} />
          ))}
        </Marquee>
        <br />
        <Marquee velocity={25}>
          {photos.slice(10,20).map(photo => (
            <GalleryImage ml={0} mr={4} src={"/penang/" + photo} />
          ))}
        </Marquee>
      </Box>
      <Container>
        <br />
        <Heading as="h1" my={3}>
          How will WSCamp work?
        </Heading>
        <Box sx={{ maxWidth: '750px', fontSize: 2 }}>
          WSCamp is an independently organised practice WSC round. At WSCamp,
          you'll get the opportunity to practice participating in each WSC
          academic event and get feedback on how you can improve. The event will
          operate on the following schedule:
        </Box>
        <br />
        <Grid columns={2} sx={{ gap: '12px' }}>
          <Grid columns={1} sx={{ gap: '12px' }}>
            <Box sx={{ bg: 'sunken', p: 3, borderRadius: 8 }}>
              <b>08:30am - </b>Check in begins at the venue.
            </Box>
            <Box sx={{ bg: 'sunken', p: 3, borderRadius: 8 }}>
              <b>09:00am - </b>The opening ceremony starts.
            </Box>
            <Box sx={{ bg: 'sunken', p: 3, borderRadius: 8 }}>
              <b>09:30am - </b>The two debate rounds begin.
            </Box>
            <Box sx={{ bg: 'sunken', p: 3, borderRadius: 8 }}>
              <b>11:30am - </b>We reconvene for Collaborative Writing.
            </Box>
            <Box sx={{ bg: 'sunken', p: 3, borderRadius: 8 }}>
              <b>13:15pm - </b>We take a break for lunch.
            </Box>
          </Grid>
          <Grid columns={1} sx={{ gap: '12px' }}>
            <Box sx={{ bg: 'sunken', p: 3, borderRadius: 8 }}>
              <b>12:45pm - </b>We reconvene for the Scholar's Bowl.
            </Box>
            <Box sx={{ bg: 'sunken', p: 3, borderRadius: 8 }}>
              <b>04:00pm - </b>The Scholar's Challenge begins.
            </Box>
            <Box sx={{ bg: 'sunken', p: 3, borderRadius: 8 }}>
              <b>05:15pm - </b>We take a short snack break.
            </Box>
            <Box sx={{ bg: 'sunken', p: 3, borderRadius: 8 }}>
              <b>05:45pm - </b>The closing ceremony starts.
            </Box>
            <Box sx={{ bg: 'sunken', p: 3, borderRadius: 8 }}>
              <b>06:30pm - </b>The event ends and we say farewell!
            </Box>
          </Grid>
        </Grid>
      </Container>
      <br />
      <Box bg="blue" mt={3}>
        <Container id="register">
          <br />
          <br />
          <Heading as="h1" mb={3} sx={{ color: 'white' }}>
            Register for <Text sx={{ fontWeight: 900 }}>WSCamp Singapore</Text>
          </Heading>
          <Box sx={{ maxWidth: '750px', fontSize: 2, color: 'white' }}>
            WSCamp Singapore is free and open to all upper primary, secondary,
            and pre-university students (no WSC experience required!).
          </Box>
          <br />
          <Box
            sx={{ maxWidth: '800px' }}
            as="form"
            method="POST"
            action="https://airtable-forms-proxy.innovationcircuit.co/api/app5qjPQUiJlflizH/Registrations?redirect=https://sg-compute.vercel.app/?signedup=true"
          >
            <Input
              placeholder="Team Name"
              name="Team Name"
              required
              sx={{ border: '1px solid', borderColor: 'sunken', mb: 2 }}
            />
            <Input
              placeholder="Contact Email"
              name="Contact Email"
              required
              type="email"
              sx={{ border: '1px solid', borderColor: 'sunken', mb: 2 }}
            />
            <Grid columns={[1, 2]} mb={2} gap={2}>
              <Input
                placeholder="Team Member 1's Name"
                name="Team Member 1's Name"
                sx={{ border: '1px solid', borderColor: 'sunken' }}
              />
              <Input
                placeholder="Team Member 1's Age"
                name="Team Member 1's Age"
                required
                type="number"
                sx={{ border: '1px solid', borderColor: 'sunken' }}
              />
            </Grid>
            <Grid columns={[1, 2]} mb={2} gap={2}>
              <Input
                placeholder="Team Member 2's Name"
                name="Team Member 2's Name"
                sx={{ border: '1px solid', borderColor: 'sunken' }}
              />
              <Input
                placeholder="Team Member 2's Age"
                name="Team Member 2's Age"
                required
                type="number"
                sx={{ border: '1px solid', borderColor: 'sunken' }}
              />
            </Grid>
            <Grid columns={[1, 2]} gap={2}>
              <Input
                placeholder="Team Member 3's Name"
                name="Team Member 3's Name"
                sx={{ border: '1px solid', borderColor: 'sunken' }}
              />
              <Input
                placeholder="Team Member 3's Age"
                name="Team Member 3's Age"
                required
                type="number"
                sx={{ border: '1px solid', borderColor: 'sunken' }}
              />
            </Grid>
            <Button mt={3} sx={{ borderRadius: 4 }}>
              Register
            </Button>
          </Box>
          <br />
          <br />
        </Container>
      </Box>
      <Container>
        <br />
        <Heading as="h1" mt={3}>
          Frequently Asked Questions
        </Heading>
        <br />
        <Grid columns={[1, 2, 3]} sx={{ gap: ['24px', '36px', '48px'] }}>
          <Box sx={{ bg: 'sunken', p: 4, borderRadius: 8 }}>
            <Heading as="h3">Is WSCamp Singapore free?</Heading>
            <Box mt={2}>
              Yep, 100% free! And that includes a free lunch, free soft drinks /
              juice and a free evening snack.
            </Box>
          </Box>
          <Box sx={{ bg: 'sunken', p: 4, borderRadius: 8 }}>
            <Heading as="h3">What do I need to bring?</Heading>
            <Box mt={2}>
              We recommend bring a notebook, a couple of pens, a water bottle
              and a phone or laptop for debate research.
            </Box>
          </Box>
          <Box sx={{ bg: 'sunken', p: 4, borderRadius: 8 }}>
            <Heading as="h3">
              Do I need to have any experience with WSC?
            </Heading>
            <Box mt={2}>
              Nope! We'll guide you through the process and help you along the
              way.
            </Box>
          </Box>
        </Grid>
      </Container>
      <Box bg="blue" sx={{ mt: 5, py: 4, color: 'white', textAlign: 'center' }}>
        <b>WSCamp Singapore 2022.</b> <br /> Date & Time TBC.
        <br />
        <Link href="mailto:onepwaa@gmail.com" color="white">
          Email Us
        </Link>{' '}
        ~{' '}
        <Link color="white" target="_blank" href="">
          Venue Directions
        </Link>
      </Box>
    </Box>
  )
}

export const getServerSideProps = () => {
  const photos = fs
    .readdirSync(path.join(process.cwd(), 'public', 'penang'))
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .slice(0, 20)
  return { props: { photos } }
}
