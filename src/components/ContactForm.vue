<template>
  <div class="contact-form-container">
    <div class="contact-grid">
      <div class="contact-form-section">
        <form @submit.prevent="handleSubmit" class="contact-form">
          <div class="form-group">
            <label for="name" class="form-label">Your Name</label>
            <input
              type="text"
              id="name"
              v-model="form.name"
              class="form-input"
              placeholder="John Doe"
              required
            />
          </div>

          <div class="form-group">
            <label for="email" class="form-label">Email Address</label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              class="form-input"
              placeholder="john@example.com"
              required
            />
          </div>

          <div class="form-group">
            <label for="message" class="form-label">Your Message</label>
            <textarea
              id="message"
              v-model="form.message"
              rows="5"
              class="form-textarea"
              placeholder="Feel free to share what you’re working on, or what you’d like to discuss."
              required
            ></textarea>
          </div>

          <button type="submit" class="submit-btn" :disabled="isSubmitting">
            <span v-if="!isSubmitting">Send Message</span>
            <span v-else>Sending...</span>
          </button>

          <div v-if="submitStatus === 'success'" class="status-message status-success">
            Opening your email client...
          </div>
          <div v-if="submitStatus === 'error'" class="status-message status-error">
            Something went wrong. Please try again or email directly.
          </div>
        </form>
      </div>

      <div class="contact-info-section">
        <div class="contact-info">
          <div class="contact-item">
            <div class="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                />
              </svg>
            </div>
            <div class="contact-details">
              <h3 class="contact-title">Email</h3>
              <p class="contact-text">{{ siteConfig.email }}</p>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                />
              </svg>
            </div>
            <div class="contact-details">
              <h3 class="contact-title">Location</h3>
              <p class="contact-text">{{ siteConfig.location }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { siteConfig } from '../data/siteConfig'

const isSubmitting = ref(false)
const submitStatus = ref(null)

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const resetForm = () => {
  form.name = ''
  form.email = ''
  form.message = ''
}

const handleSubmit = async () => {
  if (isSubmitting.value) return

  isSubmitting.value = true
  submitStatus.value = null

  try {
    await new Promise((resolve) => setTimeout(resolve, 500))

    const subject = encodeURIComponent(`Contact from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )
    const mailtoLink = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`

    window.location.href = mailtoLink
    resetForm()
    submitStatus.value = 'success'
  } catch (_error) {
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
    setTimeout(() => {
      submitStatus.value = null
    }, 3000)
  }
}
</script>

<style scoped>
.contact-form-container {
  max-width: 1000px;
  margin: 0 auto;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

@media (min-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-label {
  font-weight: 500;
  color: var(--color-heading);
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
}

.form-input,
.form-textarea {
  padding: 0.75rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: var(--color-background);
  color: var(--color-text);
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #165dff;
  box-shadow: 0 0 0 3px rgba(22, 93, 255, 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  padding: 0.75rem 1.5rem;
  background: #165dff;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(22, 93, 255, 0.3);
}

.submit-btn:hover:not(:disabled) {
  background: #0e4acc;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(22, 93, 255, 0.4);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.contact-icon {
  width: 3rem;
  height: 3rem;
  background: rgba(22, 93, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #165dff;
  flex-shrink: 0;
}

.contact-details {
  flex: 1;
}

.contact-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-heading);
  margin-bottom: 0.25rem;
}

.contact-text {
  color: var(--color-text);
  line-height: 1.5;
}

.resume-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #165dff;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
}

.resume-link:hover {
  color: #0e4acc;
  text-decoration: underline;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.status-message {
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  text-align: center;
  margin-top: var(--spacing-md);
}

.status-success {
  background: rgba(52, 211, 153, 0.1);
  color: #059669;
  border: 1px solid rgba(52, 211, 153, 0.3);
}

.status-error {
  background: rgba(239, 68, 68, 0.1);
  color: #dc2626;
  border: 1px solid rgba(239, 68, 68, 0.3);
}
</style>
