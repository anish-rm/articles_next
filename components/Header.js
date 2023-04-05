import headerStyles from '../styles/Header.module.css';

// it will be rendered in all pages
export default function Header() {
// const x = 1;
  return (
    <div>
        <h1 className={headerStyles.title}>
            <span>WebDev</span> News
        </h1>
        <p className={headerStyles.description}>
            Keep up to date with latest news
        </p>
        {/* to add css in this component alone using jsx styles */}
        {/* <style jsx>
            {`
                .title {
                    color: ${x > 3 ? 'red' : 'blue'}
                }
            `}
        </style> */}
    </div>
  )
}
