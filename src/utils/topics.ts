export const topicImageMap: Record<string, string> = {
  "employee-wellbeing": "employee-wellbeing.avif",
  "office-ergonomics": "office-ergonomics.avif",
  "work-life-balance": "work-life-balance.avif",
  "burnout-prevention": "burnout-prevention.jpg",
  "corporate-events": "corporate-events.jpg",
  "corporate-wellness": "corporate-wellness.jpg",
  "healthy-workplace": "healthy-workplace.jpg",
  "mental-health-at-work": "mental-health-at-work.webp",
  "office-relaxation": "office-relaxation.jpg",
  "onsite-chair-massage": "onsite-chair-massage.jpg",
  "stress-relief": "stress-relief.jpg",
  "team-productivity": "team-productivity.jpg"
};

export function getImageForTopic(topic?: string | null): string {
  if (topic && topicImageMap[topic]) {
    return `/blog-images/${topicImageMap[topic]}`;
  }
  // Default image
  return "/blog-images/employee-wellbeing.avif";
}

export function getTopicFromText(title: string, content: string): string {
  const text = (title + " " + content).toLowerCase();
  
  const rules = [
    { topic: "office-ergonomics", keywords: ['ergonomics', 'ergonomic', 'posture', 'standing desk', 'desk setup', 'sitting posture'] },
    { topic: "burnout-prevention", keywords: ['burnout', 'overworked', 'exhaustion', 'fatigue', 'overwhelming'] },
    { topic: "mental-health-at-work", keywords: ['mental health', 'mindfulness', 'meditation', 'depression', 'psychological'] },
    { topic: "corporate-events", keywords: ['event', 'events', 'conference', 'retreat', 'party', 'celebration'] },
    { topic: "team-productivity", keywords: ['productivity', 'performance', 'efficiency', 'efficient', 'focus', 'concentration', 'output'] },
    { topic: "work-life-balance", keywords: ['work-life', 'work life', 'worklife', 'balance', 'hybrid work', 'remote work'] },
    { topic: "stress-relief", keywords: ['stress relief', 'relieve stress', 'reduce stress', 'stressful', 'tension', 'anxiety'] },
    { topic: "healthy-workplace", keywords: ['healthy', 'nutrition', 'exercise', 'physical health', 'fitness'] },
    { topic: "office-relaxation", keywords: ['relaxation', 'calm', 'break', 'breaks', 'downtime'] },
    { topic: "corporate-wellness", keywords: ['corporate wellness', 'wellness program', 'wellness initiative'] },
    { topic: "onsite-chair-massage", keywords: ['chair massage', 'shiatsu', 'acupressure', 'massage therapist', 'massage therapy'] },
    { topic: "employee-wellbeing", keywords: ['wellbeing', 'well-being', 'employee wellness', 'care'] }
  ];

  for (const rule of rules) {
    for (const keyword of rule.keywords) {
      if (text.includes(keyword)) {
        return rule.topic;
      }
    }
  }

  return "employee-wellbeing"; // default fallback
}

