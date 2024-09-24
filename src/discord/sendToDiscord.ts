export async function sendToDiscord(name: string, email: string, message: string) {
  const url = "https://discord.com/api/webhooks/1266572333850693694/-5WfykzMXP1MbxpjSzPGQG4RHl3y8V9Y7aCFmkBmhcjsG_kdb3JO1tovAoMnikuFk5jL";
  
  const payload = {
    content: `**HODLES**\n**Name:** ${name}\n**Email:** ${email}\n**Message:** ${message}`
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      console.log('Mensagem enviada com sucesso!');
    } else {
      console.error('Erro ao enviar mensagem:', response.statusText);
    }
  } catch (error) {
    console.error('Erro de rede:', error);
  }
}
