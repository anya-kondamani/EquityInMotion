import dog1 from './images/downward_dog5.jpg';
import dog2 from './images/downward_dog6.jpg';
import warrior2_1 from './images/warrior2_3.jpg';
import warrior2_2 from './images/warrior2_7.jpg';
import tp1 from './images/treepose_1.jpg';
import tp2 from './images/treepose_7.jpg';
import bridge2 from './images/bridge_2.jpg';
import bridge1 from './images/bridge_3.jpg';
import plank1 from './images/forearmplank4.jpg';
import plank2 from './images/plank_1.jpg';
import child1 from './images/childpose_1.jpg';
import child2 from './images/childpose_3.jpg';
import cobra1 from './images/cobra_1.jpg';
import cobra2 from './images/cobra_3.jpg';
import mountain1 from './images/mountain_2.jpg';
import mountain2 from './images/mountain_3.jpg';
import cat_cow1 from './images/catcow_2.jpg';
import cat_cow2 from './images/catcow_3.jpg';
import sfb1 from './images/sfb_1.jpg';
import sfb2 from './images/sfb_2.jpg';

export const exercises = [
  {
    id: 1,
    name: "downward dog",
    description: "A yoga position that stretches the entire body.",
    instructions: [
      "Start on your hands and knees.",
      "Lift your hips up and back, straightening your legs and forming an inverted V shape.",
      "Keep your hands shoulder-width apart and your feet hip-width apart. Press your heels towards the floor.",
    ],
    images: [dog1, dog2],
  },
  {
    id: 2,
    name: "warrior II",
    description: "A yoga position that strengthens the legs and arms.",
    instructions: [
      "Stand with your feet wide apart.",
      "Turn your right foot out 90 degrees and your left foot in slightly.",
      "Bend your right knee, keeping it over your ankle.",
      "Extend your arms out to the sides, parallel to the floor, and gaze over your right hand.",
      "Hold and switch sides.",
    ],
    images: [warrior2_1, warrior2_2],
  },
  {
    id: 3,
    name: "tree pose",
    description: "A balancing yoga pose.",
    instructions: [
      "Stand on one leg and place the sole of your other foot on your inner thigh, calf, or ankle (avoid the knee).",
      "Bring your hands together in prayer position at your chest or extend them overhead.",
      "Hold and switch sides.",
      ],
    images: [tp1,tp2],
  },
  {
    id: 4,
    name: "forearm plank",
    description: "A core strengthening exercise.",
    instructions: [
      "Start in a push-up position with your hands directly under your shoulders and your body in a straight line from head to heels.",
      "Engage your core and hold the position without letting your hips sag or rise.",
      ],
    images: [plank1, plank2],
  },
  {
    id: 5,
    name: "child's pose",
    description: "A resting yoga pose.",
    instructions: [
      "Kneel on the floor, sit back on your heels, and fold forward, bringing your forehead to the floor.",
      "Extend your arms in front of you or rest them by your sides.",
      "Relax and breathe deeply.",
      ],
    images: [child1, child2],
  },
  {
    id: 6,
    name: "bridge pose",
    description: "A backbend yoga pose.",
    instructions: [
      "Lie on your back with your knees bent and feet flat on the floor, hip-width apart.",
      "Press into your feet to lift your hips toward the ceiling. ",
      "Clasp your hands underneath your back and press your arms into the floor.",
      ],
    images: [bridge1, bridge2],
  },
  {
    id: 7,
    name: "cobra pose",
    description: "A back strengthening yoga pose.",
    instructions: [
      "Lie on your stomach with your hands under your shoulders and your elbows close to your body.",
      "Press into your hands to lift your chest off the floor, keeping your elbows slightly bent.",
      "Lift your gaze forward or slightly upward.",
      ],
    images: [cobra1,cobra2],
  },
  {
    id: 8,
    name: "mountain pose",
    description: "A standing yoga pose.",
    instructions: [
      "Stand with your feet together, arms at your sides.",
      "Distribute your weight evenly across both feet.",
      "Engage your thighs, lift your chest, and reach your arms overhead with palms facing each other.",
      "Relax your shoulders away from your ears.",
      ],
    images: [mountain1,mountain2],
  },
  {
    id: 9,
    name: "cat-cow stretch",
    description: "A yoga stretch to warm up the spine.",
    instructions: [
      "Start on your hands and knees.",
      "For Cat Pose, round your back and tuck your chin to your chest.",
      "For Cow Pose, arch your back, lift your head, and let your belly drop toward the floor.",
      "Alternate between the two poses.",
      ],
    images: [cat_cow1,cat_cow2],
  },
  {
    id: 10,
    name: "seated forward bend",
    description: "A seated yoga stretch.",
    instructions: [
      "Sit with your legs extended in front of you.",
      "Inhale and lengthen your spine, then exhale and fold forward, reaching for your feet or shins.",
      "Keep your spine long and your chest open.",
      ],
    images: [sfb1,sfb2],
  },
];

export default exercises;
