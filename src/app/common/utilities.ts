import { environment } from "environments/environment";

export const pageTitles = {
  aboutPage: "About us",
}

export const pageInfo: any = {
  aboutPage: {
    title: "",
    content: ["Goselfie is a selfie contest platform where participants can register and partake in the Goselfie tasks with their phones and stand a chance of becoming a star.", "Since selfies is another thing that connects everyone besides music, our priority is to connect everyone together with the sole purpose of bringing out their talent, building their confidence, improve the way they look at themselves and positioning them for future global opportunities."]
  }
}

export const faqs: any = [
  {
    question: "1. How can I register?",
    answer: [
      'You can get started by visiting our registration page'
    ]
  },
  {
    question: "2. Is participation free?",
    answer: [
      'No. To participate in the contest, you have to make a payment of #3,000 either online or offline'
    ]
  },
  {
    question: "3. What are Goselfie Tasks?",
    answer: [
      'Goselfie Tasks are Tasks assigned to participants by Goselfie Admins which participants are to carry out through their uploaded selfies',
      'All participants are to strictly adhere to given tasks in order to be considered accurate in each respective tasks',
      'Accuracy and rationality will be considered in each participants selfies and will be used as an advantage tool for participants.'
    ]
  },
  {
    question: "4. Why can't I login?",
    answer: [
      'You shall not be able to login if your account is not activated. For Offline payment, account is activated after payment is confirmed. For Online payment, activation is immediate and automatic.',
      'Only registered and ACTIVATED users can login. Also check for wrong spelling in your password and username/email. They are CASE-SENSITIVE'
    ]
  },
  {
    question: "5. Who can participate?",
    answer: [
      'Only people who registered and are ACTIVATED can participate.'
    ]
  },
  {
    question: "7. When can I upload a Selfie?",
    answer: [
      'After activation, wait for notification on new task. Information on how and when to upload a selfie shall be sent to your email, phone number as sms as well as communicated on all our social media pages.'
    ]
  },
  {
    question: "8. What is the reward for partication?",
    answer: [
      'You stand a chance to win amazing prizes stated on our home page as well as lots of consolation prizes. As participant, the contest boosts your profile and increase opportunity to get such deals as modelling, entertainment deals and so on.'
    ]
  }
];

export const getAge = (dob: Date) => {
  return new Date().getFullYear() - new Date(dob).getFullYear();
};

export const dragOver = (e: DragEvent) => {
  e.preventDefault();
}

export const dragEnter = (e: DragEvent) => {
  e.preventDefault();
}

export const dragLeave = (e: DragEvent) => {
  e.preventDefault();
}
