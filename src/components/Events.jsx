import React, {useState} from 'react';
import { Card, CardContent } from './ui/cards';
import Button from './ui/button';
import { motion } from 'framer-motion';
import singing from '../assets/singing.webp'
import dance from '../assets/dance.jpeg';
import debate from '../assets/debate.webp';

const events = [
  {
    title: 'Register for Singing',
    description: 'I would like to register for the singing competition. Please provide the details and confirm my participation.',
    image: singing,
  },
  {
    title: 'Register for Dancing',
    description: 'I would like to register for the dancing competition. Please provide the details and confirm my participation.',
    image: dance,
  },
  {
    title: 'Register for Debate',
    description: 'I would like to register for the debate competition. Please provide the details and confirm my participation.',
    image: debate,
  },
  {
    title: 'Register for Debate',
    description: 'I would like to register for the debate competition. Please provide the details and confirm my participation.',
    image: debate,
  },
  {
    title: 'Register for Debate',
    description: 'I would like to register for the debate competition. Please provide the details and confirm my participation.',
    image: debate,
  },
  {
    title: 'Register for Debate',
    description: 'I would like to register for the debate competition. Please provide the details and confirm my participation.',
    image: debate,
  },
  {
    title: 'Register for Debate',
    description: 'I would like to register for the debate competition. Please provide the details and confirm my participation.',
    image: debate,
  },
  {
    title: 'Register for Debate',
    description: 'I would like to register for the debate competition. Please provide the details and confirm my participation.',
    image: debate,
  },
  {
    title: 'Register for Debate',
    description: 'I would like to register for the debate competition. Please provide the details and confirm my participation.',
    image: debate,
  },
  {
    title: 'Register for Debate',
    description: 'I would like to register for the debate competition. Please provide the details and confirm my participation.',
    image: debate,
  },
  {
    title: 'Register for Debate',
    description: 'I would like to register for the debate competition. Please provide the details and confirm my participation.',
    image: debate,
  },
  {
    title: 'Register for Debate',
    description: 'I would like to register for the debate competition. Please provide the details and confirm my participation.',
    image: debate,
  },
  {
    title: 'Register for Debate',
    description: 'I would like to register for the debate competition. Please provide the details and confirm my participation.',
    image: debate,
  },
  {
    title: 'Register for Debate',
    description: 'I would like to register for the debate competition. Please provide the details and confirm my participation.',
    image: debate,
  },
  {
    title: 'Register for Debate',
    description: 'I would like to register for the debate competition. Please provide the details and confirm my participation.',
    image: debate,
  },
];

const EventsPage = () => {
     
    const [showMore, setShowMore] = useState(false);

    const visibleEvents = showMore ? events : events.slice(0, 3);

  return (
    <div className="p-10 bg-white py-30">
      <div className="relative">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-300 absolute -top-8 -left-2 md:-top-16 md:-left-4">
            EVENTS
          </h1>
          <h2 className="text-3xl text-gray-500 font-bold relative z-10">Events_</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {visibleEvents.map((event, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }}>
            <Card className="overflow-hidden rounded-2xl shadow-lg">
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
              <CardContent className="p-6 text-center">
                <h2 className="text-xl text-gray-600 font-semibold mb-3">{event.title}</h2>
                <p className="text-gray-600 mb-4">{event.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
        </div>
      </div>
      <div className="text-center mt-10">
        <Button
          className="bg-red-800 text-white px-6 py-3 rounded-lg text-lg hover:bg-red-700"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'SHOW LESS ↑' : 'SEE MORE ↓'}
        </Button>
      </div>
    </div>
  );
};

export default EventsPage;
