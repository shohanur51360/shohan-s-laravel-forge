import { motion } from "framer-motion";

const shapes = [
  {
    type: "cube",
    size: 60,
    position: { top: "15%", left: "10%" },
    delay: 0,
    duration: 20,
    rotate: [0, 360],
  },
  {
    type: "octahedron",
    size: 45,
    position: { top: "20%", right: "15%" },
    delay: 2,
    duration: 25,
    rotate: [0, -360],
  },
  {
    type: "ring",
    size: 80,
    position: { bottom: "25%", left: "8%" },
    delay: 1,
    duration: 18,
    rotate: [0, 360],
  },
  {
    type: "pyramid",
    size: 50,
    position: { bottom: "20%", right: "10%" },
    delay: 3,
    duration: 22,
    rotate: [0, -360],
  },
  {
    type: "donut",
    size: 35,
    position: { top: "50%", left: "5%" },
    delay: 1.5,
    duration: 15,
    rotate: [0, 360],
  },
  {
    type: "cross",
    size: 40,
    position: { top: "40%", right: "8%" },
    delay: 2.5,
    duration: 20,
    rotate: [0, -360],
  },
];

const CubeShape = ({ size, color }: { size: number; color: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Front face */}
    <polygon
      points="30,35 70,35 70,75 30,75"
      fill={`${color}15`}
      stroke={color}
      strokeWidth="1.5"
    />
    {/* Top face */}
    <polygon
      points="30,35 50,20 90,20 70,35"
      fill={`${color}08`}
      stroke={color}
      strokeWidth="1.5"
    />
    {/* Side face */}
    <polygon
      points="70,35 90,20 90,60 70,75"
      fill={`${color}10`}
      stroke={color}
      strokeWidth="1.5"
    />
  </svg>
);

const OctahedronShape = ({ size, color }: { size: number; color: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon
      points="50,10 85,50 50,90 15,50"
      fill={`${color}10`}
      stroke={color}
      strokeWidth="1.5"
    />
    <line x1="50" y1="10" x2="50" y2="90" stroke={color} strokeWidth="1" opacity="0.5" />
    <line x1="15" y1="50" x2="85" y2="50" stroke={color} strokeWidth="1" opacity="0.5" />
  </svg>
);

const RingShape = ({ size, color }: { size: number; color: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="50"
      cy="50"
      r="35"
      stroke={color}
      strokeWidth="2"
      fill="none"
      strokeDasharray="8 4"
    />
    <circle cx="50" cy="50" r="22" stroke={color} strokeWidth="1" fill={`${color}06`} />
  </svg>
);

const PyramidShape = ({ size, color }: { size: number; color: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon
      points="50,10 85,85 15,85"
      fill={`${color}10`}
      stroke={color}
      strokeWidth="1.5"
    />
    <line x1="50" y1="10" x2="50" y2="85" stroke={color} strokeWidth="1" opacity="0.4" />
  </svg>
);

const DonutShape = ({ size, color }: { size: number; color: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="50" r="40" stroke={color} strokeWidth="8" fill="none" opacity="0.3" />
    <circle cx="50" cy="50" r="40" stroke={color} strokeWidth="2" fill="none" />
  </svg>
);

const CrossShape = ({ size, color }: { size: number; color: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="40" y="15" width="20" height="70" rx="4" fill={`${color}12`} stroke={color} strokeWidth="1.5" />
    <rect x="15" y="40" width="70" height="20" rx="4" fill={`${color}12`} stroke={color} strokeWidth="1.5" />
  </svg>
);

const shapeComponents: Record<string, React.FC<{ size: number; color: string }>> = {
  cube: CubeShape,
  octahedron: OctahedronShape,
  ring: RingShape,
  pyramid: PyramidShape,
  donut: DonutShape,
  cross: CrossShape,
};

const FloatingShapes = () => {
  const primaryColor = "hsl(239, 84%, 67%)";
  const accentColor = "hsl(280, 80%, 60%)";

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {shapes.map((shape, i) => {
        const ShapeComponent = shapeComponents[shape.type];
        const color = i % 2 === 0 ? primaryColor : accentColor;

        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              ...shape.position,
              transformStyle: "preserve-3d",
              perspective: "800px",
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [0.8, 1, 0.8],
              y: [0, -30, 0],
              rotateX: shape.rotate,
              rotateY: shape.rotate,
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              delay: shape.delay,
              ease: "easeInOut",
            }}
          >
            <ShapeComponent size={shape.size} color={color} />
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingShapes;