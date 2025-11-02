export const generateContactEmailTemplate = (data: {
  firstName: string
  lastName: string
  email: string
  phone?: string
  projectType?: string
  message: string
}) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #1a1a1a; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background: #f9f9f9; }
          .field { margin: 15px 0; }
          .label { font-weight: bold; color: #1a1a1a; }
          .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Project Inquiry</h1>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">Name:</span> ${data.firstName} ${data.lastName}
            </div>
            <div class="field">
              <span class="label">Email:</span> <a href="mailto:${data.email}">${data.email}</a>
            </div>
            ${data.phone ? `<div class="field"><span class="label">Phone:</span> ${data.phone}</div>` : ""}
            ${data.projectType ? `<div class="field"><span class="label">Project Type:</span> ${data.projectType}</div>` : ""}
            <div class="field">
              <span class="label">Message:</span>
              <p>${data.message.replace(/\n/g, "<br>")}</p>
            </div>
          </div>
          <div class="footer">
            <p>This is an automated message from your website contact form.</p>
          </div>
        </div>
      </body>
    </html>
  `
}

export const generateCareerEmailTemplate = (data: {
  fullName: string
  email: string
  phone: string
  position: string
  experience: string
  message?: string
}) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #1a1a1a; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background: #f9f9f9; }
          .field { margin: 15px 0; }
          .label { font-weight: bold; color: #1a1a1a; }
          .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Career Application</h1>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">Name:</span> ${data.fullName}
            </div>
            <div class="field">
              <span class="label">Email:</span> <a href="mailto:${data.email}">${data.email}</a>
            </div>
            <div class="field">
              <span class="label">Phone:</span> ${data.phone}
            </div>
            <div class="field">
              <span class="label">Position Applied:</span> ${data.position}
            </div>
            <div class="field">
              <span class="label">Experience Level:</span> ${data.experience}
            </div>
            ${data.message ? `<div class="field"><span class="label">Additional Info:</span><p>${data.message.replace(/\n/g, "<br>")}</p></div>` : ""}
          </div>
          <div class="footer">
            <p>This is an automated message from your career application form.</p>
          </div>
        </div>
      </body>
    </html>
  `
}
