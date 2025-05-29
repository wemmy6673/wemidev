import { motion } from 'framer-motion';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiSolidity } from 'react-icons/si';

const skillsData = [
  { icon: FaReact, name: 'React', color: 'text-blue-400' },
  { icon: FaNodeJs, name: 'Node.js', color: 'text-green-500' },
  { icon: SiTypescript, name: 'TypeScript', color: 'text-blue-600' },
  { icon: SiTailwindcss, name: 'Tailwind CSS', color: 'text-cyan-400' },
  { icon: SiSolidity, name: 'Solidity', color: 'text-gray-400' },
];

const Skills = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-white mb-12"
        >
          Skills & Technologies
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
            {skillsData.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <skill.icon className={`text-5xl ${skill.color} mb-3`} />
                <h3 className="text-white text-lg font-medium">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 