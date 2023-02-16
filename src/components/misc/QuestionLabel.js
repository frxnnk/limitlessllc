import { useState } from 'react';
import { FaQuestionCircle } from 'react-icons/fa';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';

function QuestionLabel({ text }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="inline-block relative">
      <Tooltip
        trigger="mouseenter"
        position="right"
        arrow={true}
        theme="light"
        open={isOpen}
        onRequestClose={() => setIsOpen(false)}
        interactive={true}
        content={<span>{text}</span>}
      >
        <FaQuestionCircle
          className="inline-block text-gray-500 text-lg ml-1 cursor-help"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        />
      </Tooltip>
    </div>
  );
}
