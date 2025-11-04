import { Anchor, Flex, Group, Text } from "@mantine/core";

export const AppFooter: React.FC = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      gap="md"
      wrap="wrap"
      style={{
        position: "fixed",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)", // keeps it centered
        zIndex: 999,
        width: "calc(100% - 40px)", // ensures 20px margin both sides
        maxWidth: "1200px", // prevents stretching on wide screens
        padding: "12px 24px",
        background:
          "linear-gradient(135deg, rgba(15, 23, 42, 0.75), rgba(30, 41, 59, 0.65))",
        border: "1px solid rgba(148, 163, 184, 0.15)",
        boxShadow:
          "0 -4px 16px rgba(0, 0, 0, 0.25), 0 6px 18px rgba(0, 0, 0, 0.3)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderRadius: "14px",
        transition: "all 0.3s ease",
      }}
    >
      <Group gap="xs">
        <Text
          size="sm"
          style={{
            fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)",
            color: "rgba(148, 163, 184, 0.8)",
            fontWeight: 500,
          }}
        >
          Built with
        </Text>

        <Anchor
          href="https://xmtp.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)",
            color: "#60a5fa",
            fontWeight: 700,
            textDecoration: "none",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#93c5fd";
            e.currentTarget.style.textShadow =
              "0 0 8px rgba(59, 130, 246, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#60a5fa";
            e.currentTarget.style.textShadow = "none";
          }}
        >
          XMTP
        </Anchor>
      </Group>

      <Text
        size="sm"
        style={{
          fontSize: "clamp(0.688rem, 1.4vw, 0.813rem)",
          color: "rgba(148, 163, 184, 0.65)",
          fontWeight: 500,
          textAlign: "right",
        }}
      >
        © 2025 MumbleChat – Secure Messaging
      </Text>
    </Flex>
  );
};
