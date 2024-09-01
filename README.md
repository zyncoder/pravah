### **Pravah: A Guided Yoga Routine Web App**

---

#### **Overview**

**Pravah** is a web-based application designed to guide users through a seamless yoga routine. The app leads users through a series of yoga poses, displaying animated GIFs of each pose, and timing their duration. **Pravah** is designed to be mobile-friendly and supports dark mode to enhance usability in various lighting conditions.

---

#### **Features**

- **Guided Yoga Routine:** A structured sequence of yoga poses with instructions, durations, and visual aids (GIFs).
- **Countdown Timers:** Automatically counts down for pose preparation and pose duration.
- **Mobile-Friendly Design:** Optimized for mobile devices with responsive design elements.
- **Dark Mode:** Adapts to the user’s device theme, ensuring comfortable viewing in low-light environments.

---

#### **Pose Sequence**

1. **Mountain Pose (Tadasana)**
   - Duration: 1 minute
   - Preparation Time: 10 seconds

2. **Forward Fold (Uttanasana)**
   - Duration: 2 minutes
   - Preparation Time: 20 seconds

3. **Cat-Cow Stretch (Marjaryasana-Bitilasana)**
   - Duration: 3 minutes
   - Preparation Time: 20 seconds

4. **Downward-Facing Dog (Adho Mukha Svanasana)**
   - Duration: 2 minutes
   - Preparation Time: 20 seconds

5. **Cobra Pose (Bhujangasana)**
   - Duration: 2 minutes
   - Preparation Time: 20 seconds

6. **Child’s Pose (Balasana)**
   - Duration: 3 minutes
   - Preparation Time: 20 seconds

7. **Seated Forward Bend (Paschimottanasana)**
   - Duration: 2 minutes
   - Preparation Time: 20 seconds

8. **Final Relaxation (Savasana)**
   - Duration: 2 minutes
   - Preparation Time: 20 seconds

---

#### **Folder Structure**

Here’s the corrected folder structure for the **Pravah** project:

```
Pravah/
│
├── index.html          # Main HTML file
├── styles.css          # CSS file for styling the app
├── main.js             # JavaScript file for app functionality
├── assets/
│   ├── mountain_pose.gif
│   ├── forward_fold.gif
│   ├── cat_cow.gif
│   ├── downward_dog.gif
│   ├── cobra_pose.gif
│   ├── child_pose.gif
│   ├── seated_forward_bend.gif
│   ├── savasana.gif
│   └── beep.mp3        # Sound file for notifications
│
└── README.md           # Project documentation
```
---

#### **Getting Started**

1. **Clone the Repository**
   ```bash
   git clone https://github.com/zyncoder/Pravah.git
   ```

2. **Open the Application**
   - Navigate to the `Pravah` directory.
   - Open the `index.html` file in your preferred web browser.

3. **Start the Routine**
   - Click the "Start Routine" button on the main page.
   - Follow the visual and auditory cues to perform each pose.

---

#### **Customization**

- **Add/Change Poses:**
  - Update the `poseSequence` array in `main.js` with the desired poses and their respective durations.
  - Add corresponding GIFs to the `assets/gifs` directory.

- **Styling:**
  - Modify `styles.css` to customize the look and feel of the app, including colors, fonts, and layout.

- **Dark Mode:**
  - The app automatically supports dark mode. Further adjustments can be made in the `styles.css` file under the `@media (prefers-color-scheme: dark)` section.

---

#### **Contributing**

Contributions to **Pravah** are welcome! Whether it’s fixing bugs, adding new features, or improving documentation, feel free to submit a pull request.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

---

#### **License**

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

#### **Credits**

**Pravah** was developed to assist users in maintaining a regular yoga practice with ease and accessibility. The GIFs used in this app are sourced from various free resources and are meant to visually guide users through each pose.

---

#### **Contact**

For any questions or suggestions, feel free to reach out.

---

**Pravah** – Flow through your yoga practice with ease and mindfulness.
