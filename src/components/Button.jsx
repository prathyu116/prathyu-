import React from 'react'
import PropTypes from 'prop-types';

const ButtonPrimary = ({ label, href, target = '_self', icon, classes }) => {
    console.log("href", classes)

    // if (href) {
    //     return (
    //         <a
    //             href={href}
    //             target={target}
    //             className={"btn btn-primary" + classes}>
    //             {label}
    //             {icon ?
    //                 <span className="material-symbols-rounded"
    //                     aria-hidden="true">
    //                     {icon}
    //                 </span>
    //                 : undefined
    //             }
    //         </a>
    //     )

    // } else {
       return (
         <a
           href="/images/PRATHYU PRASAD RESUME.pdf"
           className={`btn btn-primary border-none ${classes}`}
           target="_blank"
           rel="noopener noreferrer"
           onClick={(e) => {
             e.preventDefault(); // Prevent default link behavior
             const link = document.createElement("a");
             link.href = "/images/PRATHYU PRASAD RESUME.pdf";
             link.download = "PRATHYU PRASAD RESUME.pdf"; // Set the file name for download
             link.click(); // Trigger the download
             window.open("/images/PRATHYU PRASAD RESUME.pdf", "_blank"); // Open the file in a new tab
           }}
         >
           {label}
           {icon ? (
             <span className={`material-symbols-rounded`} aria-hidden="true">
               {icon}
             </span>
           ) : undefined}
         </a>
       );
    // }
}
const ButtonOutline = ({ label, href, target = '_self', icon, classes }) => {
    console.log("hrefButtonOutline", classes);

    if (href) {
        return (
            <a
                href={href}
                target={target}
                className={`btn btn-outline border-none ${classes}`}>
                {label}
                {icon ?
                    <span className="material-symbols-rounded"
                        aria-hidden="true">
                        {icon}
                    </span>
                    : undefined
                }
            </a>
        )

    } else {
        return (
          <button className={`btn btn-outline border-none ${classes}`}>
            {label}
            {icon ? (
              <span className={`material-symbols-rounded`} aria-hidden="true">
                {icon}
              </span>
            ) : undefined}
          </button>
        );
    }
}
ButtonPrimary.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}
ButtonOutline.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}

export {
    ButtonPrimary,
    ButtonOutline
} 
