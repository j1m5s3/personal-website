
export const send_email = async (email_form_data) => {
    const base_url = process.env.NEXT_PUBLIC_BE_URL;
    const email_route = '/email/';
    const email_url = base_url + email_route;
  
    const email_response = await fetch(email_url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(email_form_data)
    }).then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not OK');
      }
      return response;
    });
  
    return email_response;
  }