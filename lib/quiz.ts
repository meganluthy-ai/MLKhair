// Personal Hair Wellness Profile — Megan's clinical intake, rebuilt on-site
// from her Google Form. Section + field model drives components/QuizForm.tsx.
// Minor cleanup vs. the Google Form: general health questions (diagnosed
// conditions, current treatments, physician) are kept in Personal Health rather
// than nested under the surgery branch, so they always show.

export type FieldType = "text" | "textarea" | "date" | "radio" | "checkbox" | "grid";

export type ShowIf = { field: string; equals?: string; oneOf?: string[] };

export type Field = {
  id: string;
  type: FieldType;
  label: string;
  help?: string;
  required?: boolean;
  options?: string[];
  other?: boolean; // append an "Other" choice with a free-text box
  rows?: string[];
  cols?: string[];
  placeholder?: string;
  showIf?: ShowIf;
};

export type Section = {
  title: string;
  desc?: string;
  showIf?: ShowIf;
  fields: Field[];
};

const YN = ["Yes", "No"];

export const intake: Section[] = [
  {
    title: "About you",
    fields: [
      { id: "name", type: "text", label: "First and last name", required: true },
      { id: "email", type: "text", label: "Email", help: "So Megan can send your results and follow up.", required: true, placeholder: "you@email.com" },
      { id: "dob", type: "date", label: "Date of birth", required: true },
      { id: "phone", type: "text", label: "Phone number", required: true, placeholder: "(208) 000-0000" },
      { id: "canText", type: "radio", label: "Can we text this number as well?", options: YN, required: true },
      { id: "occupation", type: "text", label: "Occupation", help: "This helps us understand your lifestyle and possible causes of hair loss.", required: true },
      { id: "address", type: "textarea", label: "Address", help: "Please include your zip code.", required: true },
      { id: "sex", type: "radio", label: "Biological sex", help: "The biological sex you were assigned at birth.", options: ["Female", "Male"], required: true },
      { id: "referredBy", type: "radio", label: "Who referred you?", options: ["Doctor", "Google Search", "Social Media", "Salon/Barber", "Other"], required: true },
      { id: "referrerName", type: "text", label: "Name of the salon or person who referred you", showIf: { field: "referredBy", oneOf: ["Doctor", "Salon/Barber"] } },
    ],
  },
  {
    title: "Personal health",
    desc: "Your hair health reflects your overall health. Nutrition, hormones, stress, and medical conditions all affect how your hair grows.",
    fields: [
      { id: "allergies", type: "text", label: "Please list any allergies" },
      { id: "surgery", type: "radio", label: "Any surgeries with general anesthesia in the last 6 months?", help: "Anesthesia can sometimes trigger temporary hair loss.", options: YN, required: true },
      { id: "surgeryDate", type: "date", label: "When did you have surgery?", showIf: { field: "surgery", equals: "Yes" } },
      { id: "conditions", type: "checkbox", label: "Have you been diagnosed with any of the following?", options: ["Stroke", "Congestive heart failure", "Irregular heartbeat", "Hypertension", "Anemia", "Depression", "Thyroid disease", "Endocrine disorders", "Diabetes", "Liver disease", "Rosacea", "None of these"] },
      { id: "currentTreatments", type: "text", label: "Anything you are currently receiving treatment for?" },
      { id: "physician", type: "text", label: "Physician's name" },
    ],
  },
  {
    title: "The last 30 days",
    desc: "On average, how have you felt about each of these in the last 30 days? Pick the option that best reflects your overall experience.",
    fields: [
      { id: "energy", type: "radio", label: "Energy levels and sleep", required: true, options: ["Consistently fatigued, poor or unrestful sleep", "Often tired, inconsistent sleep quality", "A balance of good and tired days", "Generally energetic, refreshing sleep most days", "Consistently energized and well-rested"] },
      { id: "fitness", type: "radio", label: "Fitness and mobility", required: true, options: ["Frequently weak or stiff, basic movement is hard", "Some limits with mobility or strength", "Able to do daily tasks, moderate fitness", "Physically capable, good mobility and strength", "Consistently strong and flexible"] },
      { id: "mood", type: "radio", label: "Mental focus and mood", required: true, options: ["Often foggy, anxious, or frequent lows", "Occasionally struggle with clarity or mood", "A mix of focused and unfocused days", "Generally alert, good focus, stable mood", "Consistently sharp, balanced, and optimistic"] },
      { id: "body", type: "radio", label: "Body composition and pain", required: true, options: ["Frequent pain, unhealthy body weight", "Occasional discomfort, weight is a struggle", "Stable weight, minor aches but nothing major", "Physically well, healthy weight, little discomfort", "Lean, strong, free from chronic pain"] },
      { id: "immune", type: "radio", label: "Immune and digestive system", required: true, options: ["Frequent illness or digestive issues", "Occasional illness or digestive problems", "A few mild symptoms but generally okay", "Rarely unwell, digestion consistently good", "Strong and resilient, smooth digestion"] },
      { id: "stress", type: "radio", label: "Stress and recovery", required: true, options: ["Often overwhelmed, hard to recover", "Frequent stress, hard to bounce back", "A mix of manageable and tough days", "Handle stress well most of the time", "Manage stress well and recover quickly"] },
      { id: "lastPhysical", type: "date", label: "Date of your last physical" },
    ],
  },
  {
    title: "Medications",
    desc: "Listing your medications helps us spot links between your treatment and hair changes.",
    fields: [
      { id: "meds", type: "checkbox", label: "Are you taking any of the following?", options: ["Anti-coagulants", "Anti-hypertensive", "Hormones", "Thyroid", "Aspirin", "Multivitamins", "Radiation therapy", "Chemotherapy", "Other medications or supplements", "None of these"] },
      { id: "medsList", type: "textarea", label: "Please list the name and dosage of your medications and supplements" },
    ],
  },
  {
    title: "For women",
    showIf: { field: "sex", equals: "Female" },
    fields: [
      { id: "postmenopausal", type: "radio", label: "Are you postmenopausal?", options: YN, other: true },
      { id: "cycleIssues", type: "radio", label: "Any issues with your cycle (severe pain, etc.)?", options: YN },
      { id: "pregnant", type: "radio", label: "Are you currently pregnant or breastfeeding?", options: YN, other: true },
      { id: "planningPregnancy", type: "radio", label: "Planning to get pregnant in the next 6 months?", options: YN, other: true },
      { id: "contraceptive", type: "radio", label: "Do you take contraceptive pills?", options: YN },
      { id: "contraceptiveDetail", type: "text", label: "Dose, brand, and how long you have taken them", showIf: { field: "contraceptive", equals: "Yes" } },
    ],
  },
  {
    title: "For men",
    showIf: { field: "sex", equals: "Male" },
    fields: [
      { id: "psa", type: "radio", label: "Have you had, or plan to take, a PSA blood test?", options: YN },
      { id: "prostate", type: "radio", label: "Do you have an enlarged prostate or prostate cancer?", options: YN },
    ],
  },
  {
    title: "Nutrition",
    fields: [
      { id: "vegetarian", type: "radio", label: "Are you a vegetarian?", options: YN },
      { id: "lostWeight", type: "radio", label: "Have you lost weight in the last 6 months?", options: YN },
      { id: "weightLost", type: "text", label: "How much have you lost?", showIf: { field: "lostWeight", equals: "Yes" } },
      { id: "servingsProtein", type: "text", label: "Daily servings of protein" },
      { id: "servingsFruit", type: "text", label: "Daily servings of fruit" },
      { id: "servingsVeg", type: "text", label: "Daily servings of vegetables" },
      { id: "servingsCaffeine", type: "text", label: "Daily servings of caffeine" },
      { id: "servingsCarbs", type: "text", label: "Daily servings of carbohydrates" },
    ],
  },
  {
    title: "Hair and scalp",
    fields: [
      { id: "scalpFeel", type: "radio", label: "How does your scalp feel?", options: ["Dry", "Oily", "Normal", "Dandruff", "Other"] },
      { id: "redness", type: "radio", label: "Any redness or itchiness on your scalp?", options: YN },
      { id: "pullHair", type: "radio", label: "Do you pull your hair?", options: YN },
      { id: "bumps", type: "radio", label: "Any bumps or raised areas on your scalp?", options: YN },
      { id: "patchyLoss", type: "radio", label: "Recurrent attacks of patchy loss?", options: YN },
      { id: "differentLengths", type: "radio", label: "Do you have hair of different lengths?", options: YN },
      { id: "lossAreas", type: "checkbox", label: "Where do you currently have hair loss?", options: ["All over scalp", "Front", "Crown"] },
      { id: "bodyLoss", type: "radio", label: "Any loss of hair on the body?", options: YN },
      { id: "bodyArea", type: "text", label: "What area?", showIf: { field: "bodyLoss", equals: "Yes" } },
      { id: "ageNoticed", type: "text", label: "At what age did you notice hair loss?" },
      { id: "suddenGradual", type: "radio", label: "Was it sudden or gradual?", options: ["Sudden", "Gradual"] },
      { id: "gettingWorse", type: "radio", label: "Is your hair loss getting worse?", options: YN },
      { id: "hairsPerDay", type: "text", label: "Roughly how many hairs per day?" },
      { id: "shampoo", type: "text", label: "What shampoo and conditioner do you use?" },
      { id: "shampooFreq", type: "radio", label: "How many times a week do you shampoo?", options: ["1", "2", "3", "4", "5", "6", "7", "8+"] },
      { id: "dryer", type: "radio", label: "Do you use a hair dryer?", options: YN },
      { id: "dryerTemp", type: "radio", label: "What temperature?", options: ["Hot", "Medium", "Cold", "Unsure"], showIf: { field: "dryer", equals: "Yes" } },
      { id: "towelRub", type: "radio", label: "When your hair is wet, do you rub it dry with a towel?", options: YN },
      { id: "color", type: "radio", label: "Do you color your hair?", options: YN },
      { id: "colorFreq", type: "text", label: "How often?", showIf: { field: "color", equals: "Yes" } },
      { id: "medicalCause", type: "textarea", label: "Is your hair loss caused by any medical problem or medication you are aware of?" },
      { id: "goals", type: "radio", label: "What are your goals and expectations?", options: ["Prevent further loss", "Gain back hair quickly", "Gradually gain back some hair"], other: true, required: true },
      { id: "willingToWait", type: "radio", label: "Treatment can take 6 months or more to show results. Are you willing to wait that long?", options: YN, required: true },
      { id: "bothersMost", type: "radio", label: "Where does hair loss bother you most?", options: ["No variation in hairstyle", "Going outside on windy days", "Social life", "Seeing old friends", "Participating in sports", "Overall appearance", "Conscious of appearance at work", "Seeing pictures or videos", "Wearing hats when going out", "Swimming or getting caught in the rain", "Overall self-esteem", "Meeting new people", "People make comments"] },
    ],
  },
  {
    title: "Family history",
    fields: [
      { id: "familyHistory", type: "radio", label: "Does hair loss run in your family?", options: YN, required: true },
      { id: "familyGrid", type: "grid", label: "For each relative, what is their hair status?", rows: ["Parents", "Grandparents", "Siblings", "Aunt", "Uncle"], cols: ["Bald", "Thinning hair", "Not bald", "Unknown"], showIf: { field: "familyHistory", equals: "Yes" } },
      { id: "researched", type: "checkbox", label: "What options have you researched for your hair loss?", help: "Over the counter and prescription.", options: ["Growth Factors", "Low-Level Laser Therapy", "Platelet-rich Plasma", "Rogaine / Minoxidil 5%", "Finasteride / Propecia", "Laser Cap", "Microneedling", "Transplants", "Hair Replacement / Wigs", "SMP", "XTC", "HLCC", "Bosley", "Hair Club", "Keeps", "Hims / Hers", "Nutrafol", "Keranique"], other: true },
      { id: "bother", type: "radio", label: "How much does your hair loss bother you?", options: ["Slightly", "Moderately", "Highly"], required: true },
    ],
  },
  {
    title: "Consent",
    fields: [
      {
        id: "consent",
        type: "radio",
        label:
          "I agree to be evaluated and understand I will first undergo a comprehensive preliminary evaluation. Checkups are included with the program, including monthly or quarterly digital and microscopic photos, which I consent to. I understand results vary and that it is my responsibility to report any changes in my condition.",
        options: ["Yes, I agree", "No"],
        required: true,
      },
    ],
  },
];
