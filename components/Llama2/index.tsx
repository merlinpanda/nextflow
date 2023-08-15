import { ActionIcon, Box, Button, Card, Loader, ScrollArea, Stack, Text, TextInput } from "@mantine/core";
import { IconSearch, IconSend } from "@tabler/icons-react";
import axios from 'axios';
import { useState, useRef } from "react";
import { useForm } from '@mantine/form';

const json = {
  "version": "2c1608e18606fad2812020dc541930f2d0495ce32eee50074220b87300bc16e1",
  "systemPrompt": "You are a helpful assistant.",
  "temperature": 0.75,
  "topP": 0.9,
  "maxTokens": 800,
}
export default function Llama2() {
  const [value, setValue] = useState<string|number>('');
  const viewport = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const scrollToBottom = () =>
    viewport?.current?.scrollTo({ top: viewport?.current.scrollHeight, behavior: 'smooth' });

  const [messages, updateMessages] = useState<string[]>([]);
  const form = useForm({});

  const search = () => {
    if (!value) return;
    setLoading(true)
    const newMessages = [ ...messages, `[INST] ${value} [INST]`]
    updateMessages(oldMessages => [ ...oldMessages, `[INST] ${value} [INST]`])
    setValue("");
    const prompt = newMessages.join("\n") + "\nAssistant: ";
    const data = Object.assign({}, { prompt }, json);

    axios.post('/api/ai', JSON.stringify(data) , {
      headers: {
        "Content-Type": "text/plain;charset=UTF-8",
        "Origin": "https://www.llama2.ai",
        "Referer": "https://www.llama2.ai/"
      }
    }).then((res) => {
      if (res.status == 200) {
        updateMessages(oldMessages => [ ...oldMessages, res.data])
        scrollToBottom()
      }
      setLoading(false)
    })
  }

  return (
    <>
      <Box>
        <Card withBorder>
          <Card.Section>
            <Box px="sm" py="xs">
              <Text size="xs">Llama 2</Text>
            </Box>
          </Card.Section>
          <Stack spacing="xs">
            <ScrollArea p="xs" bg="gray" h={300} type="never">
              {messages && messages.map((message, index) => {
                message = message.replaceAll('[INST]', "")
                return (<Text my={4} size="sm" key={index}>{message.trim()}</Text>)
              })}
              {loading && <Loader variant="dots" />}
            </ScrollArea>
            <form onSubmit={form.onSubmit(() => search())}>
              <TextInput
                value={value}
                onChange={(event) => setValue(event.currentTarget.value)}
                variant="filled"
                rightSection={
                  <ActionIcon onClick={() => search()}>
                    <IconSend size="1rem" />
                  </ActionIcon>
                }
              />
            </form>
          </Stack>
        </Card>
      </Box>
    </>
  );
}