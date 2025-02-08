import { ProjectItem } from "../types";

export const projectsData: ProjectItem[] = [
  {
    title: "Board Games Arena",
    breif:
      "A C++ project featuring four board games with Player vs Player and computer gameplay using random-move algorithms.",
    image: "XO.png",
    tech: ["C++", "OOP", "Algorithms"],
    github: "https://github.com/mohamedwdm/Board-Games-Arena.git",
    //live: "https://youtu.be/2XF-HgauItk?si=xnuz7_gpUVBBgdW6",
    details: {
      descreption:
        "This C++ project is Board Game Arena, featuring four games: Classic Tic-Tac-Toe (3x3), 5x5 Tic-Tac-Toe, Connect 4, and a custom Pyramid Tic-Tac-Toe. Players can choose between Player vs Player mode or challenge the computer, which makes moves using a random-move algorithm for unpredictable gameplay. The project is designed with a modular structure, making it scalable and maintainable, while the console-based interface ensures a clean and user-friendly experience. This project showcases my expertise in C++ programming, algorithm design, and game logic implementation.",
    //   solution:
    //     "Built a streamlined job portal with real-time updates and intelligent matching",
    //   features: [
    //     "Real-time job notifications",
    //     "AI-powered job matching",
    //     "Advanced search filters",
    //     "Application tracking system",
    //   ],
    //   impact: "Helping thousands of job seekers find their dream positions",
     },
  },
  {
    title: "BMP Filters Pack",
    breif: " A C++ project for processing grayscale .bmp images using nine custom filters, including Black & White, Invert, Merge, Rotate, and Blur.",
    image: "imagefilters.png",
    tech: ["C++", "OOP", "Algorithms"],
    github: "https://github.com/mohamedwdm/BMP-Filters-pack.git",
  //  live: "https://youtu.be/glAC7d-TYSM?si=KW5Wrdeh5uVPpu7c",
     details: {
       descreption: "This C++ project is a BMP Filters Pack that processes grayscale .bmp images using nine different filters. The available filters include a Black & White Filter, Invert Colors Filter, and a Merge Filter that combines two images. It also features a Flip Filter (horizontally or vertically), Darken and Lighten Filter to adjust brightness, and a Rotate Filter for rotating images by 90°, 180°, or 270°. The Mirror Half Filter creates a mirrored effect on half of the image, while the Shuffle Filter rearranges image sections randomly. Finally, a Blur Filter adds a softening effect to reduce image details. This project demonstrates my skills in image processing, algorithm design, and C++ programming, with a focus on efficient manipulation of raw image data.",
    //   solution:
    //     "Created an intuitive scheduling platform with automated time zone handling",
    //   features: [
    //     "Multiple calendar integration",
    //     "Custom availability rules",
    //     "Automated reminders",
    //     "Team scheduling",
    //   ],
    //   impact: "Reduced meeting scheduling time by 80% for users",
     },
  },
  {
    title: "CPU Scheduling Simulator",
    breif: "A Java project that simulates SJF, Priority Scheduling, and SRTF algorithms,determines which processes run when there are multiple run-able processes. ",
    image: "cpu.jpg",
    tech: ["Java", "OOP", "Data Structures", "OS Fundamentals"],
    github: "https://github.com/mohamedwdm/CPU-Scheduler-Simulator.git",
  //  live: "https://youtu.be/R5dBYINNouY?si=9x7lSDuqwJ0ojtIg",
     details: {
       descreption: "This Java project simulates three common CPU scheduling algorithms: Shortest Job First (SJF), Priority Scheduling, and Shortest Remaining Time First (SRTF). It allows users to input multiple processes with details like process name, arrival time, burst time, and priority.it determining which processes run when multiple processes are eligible. The project calculates and displays the waiting time and turnaround time for each process, along with average statistics for all processes. The simulator also includes features like context switching, aging for priority adjustment, and handling process starvation.This project highlights my skills in Java, algorithm design and fundamentals of operating systems.",
    //   solution:
    //     "Developed a streamlined alternative to complex enterprise tools",
    //   features: [
    //     "Kanban and Scrum boards",
    //     "Sprint planning",
    //     "Time tracking",
    //     "Performance analytics",
    //   ],
    //   impact: "Helping teams increase productivity by 40%",
     },
  },
  {
    title: "Reflct",
    breif: "A minimalist journaling application",
    image: "reflct.png",
    tech: ["Next.js", "Tailwind CSS", "Supabase"],
    github: "https://youtu.be/R5dBYINNouY?si=9x7lSDuqwJ0ojtIg",
  //  live: "https://youtu.be/R5dBYINNouY?si=9x7lSDuqwJ0ojtIg",
    // details: {
    //   problem: "Digital journaling apps are often cluttered and complex",
    //   solution:
    //     "Created a clean, focused writing experience with powerful features",
    //   features: [
    //     "Markdown support",
    //     "Daily prompts",
    //     "Mood tracking",
    //     "Privacy-focused design",
    //   ],
    //   impact: "Helping users maintain consistent journaling habits",
    // },
  },
];
