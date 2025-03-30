import styles from './Scroll.module.css';

// Linguagens de programação
import python from '../../assets/tecnologias/python.svg';
import java from '../../assets/tecnologias/java.svg';
import php from '../../assets/tecnologias/php.svg';
import golang from '../../assets/tecnologias/golang.svg';
import html from '../../assets/tecnologias/html.svg';
import javascript from '../../assets/tecnologias/javaScript.svg';
import css from '../../assets/tecnologias/css.svg';

// Bancos de dados e serviços
import mongodb from '../../assets/tecnologias/mongodb.svg';
import postgresql from '../../assets/tecnologias/postgresql.svg';
import amazon_ec2 from '../../assets/tecnologias/amazon_ec2.svg';



function Scroll() {
    return (
      <>
        <div className={styles.scroll}>
          <div className={styles.scrollContent}>
          
              <div className={styles.images}>
                  <img src={python} alt="python" />
                  <img src={java} alt="java" />
                  <img src={php} alt="php" />
                  <img src={golang} alt="golang" />
                  <img src={html} alt="html" />
                  <img src={javascript} alt="javascript" />
                  <img src={css} alt="css" />
                  <img src={mongodb} alt="mongodb" />
                  <img src={postgresql} alt="postgresql" />
                  <img src={amazon_ec2} alt="amazon_ec2" />
              </div>
              
              
              <div className={styles.images}>
                  <img src={python} alt="python" />
                  <img src={java} alt="java" />
                  <img src={php} alt="php" />
                  <img src={golang} alt="golang" />
                  <img src={html} alt="html" />
                  <img src={javascript} alt="javascript" />
                  <img src={css} alt="css" />
                  <img src={mongodb} alt="mongodb" />
                  <img src={postgresql} alt="postgresql" />
                  <img src={amazon_ec2} alt="amazon_ec2" />
              </div>

              <div className={styles.images}>
                  <img src={python} alt="python" />
                  <img src={java} alt="java" />
                  <img src={php} alt="php" />
                  <img src={golang} alt="golang" />
                  <img src={html} alt="html" />
                  <img src={javascript} alt="javascript" />
                  <img src={css} alt="css" />
                  <img src={mongodb} alt="mongodb" />
                  <img src={postgresql} alt="postgresql" />
                  <img src={amazon_ec2} alt="amazon_ec2" />
              </div>


              

              
          </div>
        </div>
      </>
    );
  }
  
  
export default Scroll;
