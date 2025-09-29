import React from "react";

import {
  Heading,
  Flex,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
} from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";

import { baseURL, routes } from "@/app/resources";
import { home, about, person, newsletter } from "@/app/resources/content";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { Meta, Schema } from "@/once-ui/modules";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
  });
}

export default function Home() {
  return (
    <Column maxWidth="xl" gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`${baseURL}/og?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth paddingY="8" gap="m">
        <Flex
          flex={12}
          mobileDirection="column"
          gap="32"
          horizontal="space-between"
        >
          <Flex flex={8}>
            <Column maxWidth="m" gap="16" style={{ textAlign: "center" }}>
              {/* {home.featured && (
            <RevealFx
              fillWidth
              horizontal="start"
              paddingTop="16"
              paddingBottom="32"
              paddingLeft="12"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )} */}
              <RevealFx
                translateY="4"
                fillWidth
                horizontal="start"
                paddingBottom="4"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Heading wrap="balance" variant="display-default-xs">
                  Hi, I Am
                </Heading>
              </RevealFx>
              <RevealFx
                translateY="4"
                fillWidth
                horizontal="start"
                paddingBottom="8"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Heading
                  wrap="balance"
                  variant="display-strong-l"
                  style={{
                    background: "linear-gradient(90deg, #FF8A00, #E52E71)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  NEELAKANDAN
                </Heading>
              </RevealFx>
              <RevealFx
                translateY="4"
                fillWidth
                horizontal="start"
                paddingBottom="40"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Heading
                  wrap="balance"
                  variant="display-default-xs"
                  onBackground="brand-medium"
                >
                  Full Stack Web & App Developer
                </Heading>
              </RevealFx>
              <RevealFx
                translateY="4"
                fillWidth
                horizontal="start"
                paddingBottom="12"
              >
                <Heading wrap="balance" variant="display-strong-s">
                  {home.headline}
                </Heading>
              </RevealFx>
              <RevealFx
                translateY="4"
                fillWidth
                horizontal="start"
                paddingBottom="24"
              >
                <Text variant="body-default-xl" onBackground="neutral-weak">
                  Full Stack Developer with 3+ years of experience in Web,
                  Mobile, 3D/VR, AI, and Blockchain. Passionate about building
                  scalable, immersive, and user-centric digital experiences.
                </Text>
                {/* <Heading wrap="balance" variant="display-default-xs">
                  Full Stack Developer with 3+ years of experience in Web,
                  Mobile, 3D/VR, AI, and Blockchain. Passionate about building
                  scalable, immersive, and user-centric digital experiences.
                </Heading> */}
              </RevealFx>
              {/* <RevealFx
                translateY="8"
                delay={0.2}
                fillWidth
                horizontal="start"
                paddingBottom="32"
              >
                <Text
                  wrap="balance"
                  onBackground="neutral-weak"
                  variant="heading-default-s"
                >
                  {home.subline}
                </Text>
              </RevealFx> */}
              <RevealFx
                paddingTop="12"
                delay={0.4}
                horizontal="start"
                paddingLeft="12"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button
                  id="about"
                  data-border="rounded"
                  href={about.path}
                  variant="secondary"
                  size="m"
                  arrowIcon
                >
                  <Flex gap="8" vertical="center">
                    {about.avatar.display && (
                      <Avatar
                        style={{
                          marginLeft: "-0.75rem",
                          marginRight: "0.25rem",
                        }}
                        src={person.avatar}
                        size="m"
                      />
                    )}
                    {about.title}
                  </Flex>
                </Button>
              </RevealFx>
            </Column>
          </Flex>
          <Flex flex={4}>
            <Column maxWidth="s">
              <img
                src="/images/avatar4.png"
                alt="Preview"
                width={"100%"}
                height={"100%"}
                style={{
                  borderRadius: "var(--radius-xl)",
                  border: "1px solid var(--border-neutral-alpha-medium)",
                }}
              />
            </Column>
          </Flex>
        </Flex>
      </Column>
      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} />
      </RevealFx>
      {/* {routes["/blog"] && (
        <Flex fillWidth gap="24" mobileDirection="column">
          <Flex flex={1} paddingLeft="l" paddingTop="24">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              Latest from the blog
            </Heading>
          </Flex>
          <Flex flex={3} paddingX="20">
            <Posts range={[1, 2]} columns="2" />
          </Flex>
        </Flex>
      )} */}
      <Projects range={[2]} />
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
