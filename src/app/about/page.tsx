import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  SmartImage,
  Tag,
  Text,
} from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import { person, about, social } from "@/app/resources/content";
import React from "react";
import { Meta, Schema } from "@/once-ui/modules";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills
        .filter((skill) => skill !== undefined)
        .map((skill) => skill.title),
    },
  ];
  return (
    <Column maxWidth="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`${baseURL}/og?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          hide="s"
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Flex fillWidth mobileDirection="column" horizontal="center">
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            position="sticky"
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={2}
            horizontal="center"
          >
            <Avatar src={person.avatar} size={15} />
            <Flex gap="8" vertical="center">
              <Icon onBackground="success-weak" name="globe" />
              {person.location}
            </Flex>
            {person.languages.length > 0 && (
              <Flex wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={language} size="l">
                    {language}
                  </Tag>
                ))}
              </Flex>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={10} maxWidth={45}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {about.calendar.display && (
              <Flex
                fitWidth
                border="brand-alpha-medium"
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                }}
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
              >
                <Icon
                  paddingLeft="12"
                  name="calendar"
                  onBackground="brand-weak"
                />
                <Flex paddingX="8">Schedule a call</Flex>
                <IconButton
                  href={about.calendar.link}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Flex>
            )}
            <Heading className={styles.textAlign} variant="display-strong-l">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Flex
                className={styles.blockAlign}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
                horizontal="center"
                fitWidth
                data-border="rounded"
              >
                {social.map(
                  (item) =>
                    item.link && (
                      <React.Fragment key={item.name}>
                        <Button
                          className="s-flex-hide"
                          key={item.name}
                          href={item.link}
                          prefixIcon={item.icon}
                          label={item.name}
                          size="s"
                          variant="secondary"
                          target="_blank"
                        />
                        <IconButton
                          className="s-flex-show"
                          size="l"
                          key={`${item.name}-icon`}
                          href={item.link}
                          icon={item.icon}
                          variant="secondary"
                        />
                      </React.Fragment>
                    )
                )}
              </Flex>
            )}
          </Column>

          {about.intro.display && (
            <Column
              textVariant="body-default-l"
              fillWidth
              gap="m"
              marginBottom="xl"
            >
              {about.intro.description}
            </Column>
          )}

          {about.work.display && (
            <>
              <Heading
                as="h2"
                id={about.work.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.work.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.work.experiences.map((experience, index) => (
                  <Column
                    key={`${experience.company}-${experience.role}-${index}`}
                    fillWidth
                  >
                    <Flex
                      fillWidth
                      horizontal="space-between"
                      vertical="end"
                      marginBottom="4"
                    >
                      <Text id={experience.company} variant="heading-strong-l">
                        {experience.company}
                      </Text>
                      <Text
                        variant="heading-default-xs"
                        onBackground="neutral-weak"
                      >
                        {experience.timeframe}
                      </Text>
                    </Flex>
                    <Text
                      variant="body-default-s"
                      onBackground="brand-weak"
                      marginBottom="m"
                    >
                      {experience.role}
                    </Text>
                    <Column as="ul" fillWidth gap="12">
                      {experience.achievements.map((achievement, index) => (
                        <li
                          key={`${experience.company}-${index}`}
                          style={{ listStyle: "none" }}
                        >
                          <Text as="p" variant="body-strong-l">
                            {achievement.title}
                          </Text>
                          <Column as="ul" gap="8" marginTop="8">
                            {achievement.description.map((item, subIndex) => (
                              <Text
                                as="li"
                                variant="body-default-m"
                                key={`${experience.company}-${index}-${subIndex}`}
                                style={{
                                  listStyle: "disc",
                                  marginLeft: "30px",
                                }}
                              >
                                {item}
                              </Text>
                            ))}
                          </Column>
                        </li>
                      ))}
                    </Column>
                    {/* <Column as="ul" gap="16">
                      {experience.achievements.map(
                        (achievement: JSX.Element, index: number) => (
                          <Text
                            as="li"
                            variant="body-default-m"
                            key={`${experience.company}-${index}`}
                          >
                            {achievement}
                          </Text>
                        )
                      )}
                    </Column> */}
                    {/* {experience.images.length > 0 && (
                      <Flex fillWidth paddingTop="m" paddingLeft="40" wrap>
                        {experience.images.map((image, index) => (
                          <Flex
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            //@ts-ignore
                            minWidth={image.width}
                            //@ts-ignore
                            height={image.height}
                          >
                            <SmartImage
                              enlarge
                              radius="m"
                              //@ts-ignore
                              sizes={image.width.toString()}
                              //@ts-ignore
                              alt={image.alt}
                              //@ts-ignore
                              src={image.src}
                            />
                          </Flex>
                        ))}
                      </Flex>
                    )} */}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.studies.display && (
            <>
              <Heading
                as="h2"
                id={about.studies.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.studies.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.studies.institutions.map((institution, index) => (
                  <Column
                    key={`${institution.name}-${index}`}
                    fillWidth
                    gap="4"
                  >
                    <Text id={institution.name} variant="heading-strong-l">
                      {institution.name}
                    </Text>
                    <Text
                      variant="heading-default-xs"
                      onBackground="neutral-weak"
                    >
                      {institution.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.technical.display && (
            <>
              <Heading
                as="h2"
                id={about.technical.title}
                variant="display-strong-s"
                marginBottom="40"
              >
                {about.technical.title}
              </Heading>
              <Flex fillWidth gap="l" wrap>
                {about.technical.skills.map((skill, index) => (
                  <Column
                    key={`${skill}-${index}`}
                    gap="0"
                    minWidth={5}
                    style={{ marginRight: "20px" }}
                    wrap
                  >
                    {/* <Text variant="heading-strong-l">{skill.title}</Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {skill.description}
                    </Text> */}
                    {skill && skill.images && skill.images.length > 0 && (
                      <Flex width={5} paddingTop="xs" gap="2" wrap>
                        {skill.images.map((image, index) => (
                          <Flex
                            key={index}
                            direction="column"
                            // border="neutral-medium"
                            // overflow="hidden"
                            padding="s"
                            radius="l"
                            onBackground="neutral-weak"
                            style={{
                              // backgroundColor: "rgb(237, 237, 237)",
                              background:
                                "linear-gradient(135deg, #0d1b2a,rgb(17, 45, 98))",
                              position: "relative",
                              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                            }}
                            //@ts-ignore
                            minWidth={image.width}
                            //@ts-ignore
                            height={image.height}
                          >
                            <SmartImage
                              // enlarge
                              radius="l"
                              //@ts-ignore
                              sizes={image.width.toString()}
                              //@ts-ignore
                              alt={image.alt}
                              //@ts-ignore
                              src={image.src}
                              objectFit="contain"
                            />
                            <Flex
                              key={index}
                              radius="l"
                              onBackground="neutral-strong"
                              style={{
                                background:
                                  "linear-gradient(135deg, #0d1b2a,rgb(24, 58, 120))",
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                top: 0,
                                left: 0,
                                zIndex: -1,
                                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
                                transform:
                                  "rotate(12deg) translate(12px, -14px)",
                              }}
                              //@ts-ignore
                              minWidth={image.width}
                              //@ts-ignore
                              height={image.height}
                            ></Flex>
                          </Flex>
                        ))}
                      </Flex>
                    )}
                    <Text
                      variant="body-strong-m"
                      align="center"
                      paddingTop="xs"
                    >
                      {skill ? skill.title : ""}
                    </Text>
                  </Column>
                ))}
              </Flex>
            </>
          )}
        </Column>
      </Flex>
    </Column>
  );
}
