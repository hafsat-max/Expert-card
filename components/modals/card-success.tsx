import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button } from '@mantine/core';
import Image from "next/image";


export function CardSuccess() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication" centered>
        {/* Modal content */}

      </Modal>

      <Group position="center">
        <Button onClick={open}>Open centered Modal</Button>
      </Group>
    </>
  );
}