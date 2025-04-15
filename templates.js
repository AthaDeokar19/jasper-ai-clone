const contentTemplates = {
    blogIntro: {
      name: "Blog Introduction",
      fields: ["Topic", "Keywords", "Tone"],
      prompt: "Write a blog introduction about {{topic}} using keywords: {{keywords}} in a {{tone}} tone."
    },
    socialPost: {
      name: "Social Media Post",
      fields: ["Platform", "Product", "Call to Action"],
      prompt: "Create a {{platform}} post for {{product}} with CTA: {{call to action}}"
    }
  };
  
  function loadTemplate(templateId) {
    const template = contentTemplates[templateId];
    const templateHTML = `
      <div class="template-form">
        <h3>${template.name}</h3>
        ${template.fields.map(field => `
          <div class="form-group">
            <label>${field}:</label>
            <input type="text" name="${field.toLowerCase()}">
          </div>
        `).join('')}
        <button onclick="generateContent('${templateId}')">Generate</button>
      </div>
    `;
    document.getElementById('content-generator').innerHTML = templateHTML;
  }
  