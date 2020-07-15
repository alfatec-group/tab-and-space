import NextJs from '../svgs/nextjs.svg';
import LinkedIn from '../svgs/linkedin.svg';
import Github from '../svgs/github.svg';
import Twitter from '../svgs/twitter.svg';
import DevDotTo from '../svgs/dev-dot-to.svg';
const Footer = () => {
  return (
    <footer className="text-center bg-gray-200 py-4">
      <div>
        Created by{' '}
        <a href="https://arindamdawn.com" target="_blank">
          Arindam Dawn
        </a>{' '}
        with 🧡 using{' '}
        <a href="https://nextjs.org/" target="_blank">
          <NextJs
            width="22"
            height="22"
            style={{
              display: 'inline-block',
              fontSize: '40px',
              position: 'relative',
              top: '-2px',
            }}
          />
        </a>
      </div>
      <div className="flex justify-center space-x-10 py-2">
        <a
          href="http://github.com/arindamdawn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github width="22" height="22" />
        </a>
        <a
          href="http://linkedin.com/in/arindamdawn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn width="22" height="22" />
        </a>
        <a
          href="http://twitter.com/arindam_dawn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter width="22" height="22" />
        </a>
        <a
          href="https://dev.to/arindamdawn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DevDotTo width="22" height="22" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
