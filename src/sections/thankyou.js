import React from "react";
import { Typography, Grid } from "@material-ui/core";
import Styles from "../app-style.js";

export const Thankyou = () => {
  return (
    <>
      <Grid item direction="row" justify="center" alignItems="center">
        <Grid
          item
          justify="center"
          alignItems="center"
          style={{
            height: "717px",
            backgroundColor: "#24A64A",
          }}
        >
          <Grid item container>
            <Grid item container justify="center" style={{ marginTop: "40px" }}>
              <svg
                width="265"
                height="60"
                viewBox="0 0 265 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.637 29.759H25.693V11.5909H12.8478V18.6267H18.7718V22.7231H14.637C12.5907 22.7231 10.6281 21.8967 9.18112 20.4258C7.73411 18.9548 6.9212 16.9597 6.9212 14.8795C6.9212 12.7992 7.73411 10.8042 9.18112 9.33318C10.6281 7.86221 12.5907 7.03583 14.637 7.03583H25.8212V0H14.637C10.7551 0 7.03207 1.56766 4.28709 4.3581C1.54211 7.14854 0 10.9332 0 14.8795C0 18.8258 1.54211 22.6104 4.28709 25.4009C7.03207 28.1913 10.7551 29.759 14.637 29.759ZM50.4298 29.759H42.8344C38.9525 29.759 35.2295 28.1913 32.4845 25.4009C29.7395 22.6104 28.1974 18.8258 28.1974 14.8795C28.1974 10.9332 29.7395 7.14854 32.4845 4.3581C35.2295 1.56766 38.9525 0 42.8344 0H50.4298V7.03583H42.8344C40.7881 7.03583 38.8255 7.86221 37.3785 9.33318C35.9315 10.8042 35.1186 12.7992 35.1186 14.8795C35.1186 16.9597 35.9315 18.9548 37.3785 20.4258C38.8255 21.8967 40.7881 22.7231 42.8344 22.7231H50.4298V29.759ZM111.59 29.5401H94.7641V22.5042H111.59C111.863 22.5042 112.132 22.4497 112.384 22.3438C112.635 22.2378 112.864 22.0825 113.057 21.8868C113.249 21.691 113.402 21.4586 113.506 21.2028C113.61 20.9471 113.664 20.6729 113.664 20.3961C113.664 20.1192 113.61 19.8451 113.506 19.5893C113.402 19.3336 113.249 19.1012 113.057 18.9054C112.864 18.7097 112.635 18.5544 112.384 18.4484C112.132 18.3425 111.863 18.2879 111.59 18.2879H103.887C101.502 18.2879 99.2137 17.3246 97.5268 15.6097C95.8399 13.8949 94.8922 11.5691 94.8922 9.14397C94.8922 6.71884 95.8399 4.39304 97.5268 2.67821C99.2137 0.96338 101.502 0 103.887 0H117.125V7.03583H103.887C103.337 7.03583 102.81 7.25794 102.421 7.65329C102.032 8.04865 101.813 8.58486 101.813 9.14397C101.813 9.70309 102.032 10.2393 102.421 10.6347C102.81 11.03 103.337 11.2521 103.887 11.2521H111.59C113.976 11.2521 116.264 12.2155 117.951 13.9303C119.638 15.6452 120.585 17.971 120.585 20.3961C120.585 22.8212 119.638 25.147 117.951 26.8619C116.264 28.5767 113.976 29.5401 111.59 29.5401ZM249.594 29.759H231.394C227.512 29.759 223.789 28.1913 221.044 25.4009C218.299 22.6104 216.757 18.8258 216.757 14.8795C216.757 10.9332 218.299 7.14854 221.044 4.3581C223.789 1.56766 227.512 0 231.394 0H249.594C253.476 0 257.199 1.56766 259.944 4.3581C262.689 7.14854 264.231 10.9332 264.231 14.8795C264.231 18.8258 262.689 22.6104 259.944 25.4009C257.199 28.1913 253.476 29.759 249.594 29.759ZM231.394 7.03583C229.347 7.03583 227.385 7.86221 225.938 9.33318C224.491 10.8042 223.678 12.7992 223.678 14.8795C223.678 16.9597 224.491 18.9548 225.938 20.4258C227.385 21.8967 229.347 22.7231 231.394 22.7231H249.594C251.64 22.7231 253.603 21.8967 255.05 20.4258C256.497 18.9548 257.31 16.9597 257.31 14.8795C257.31 12.7992 256.497 10.8042 255.05 9.33318C253.603 7.86221 251.64 7.03583 249.594 7.03583H231.394ZM231.394 18.5537H249.594C250.068 18.5537 250.538 18.4587 250.977 18.2741C251.415 18.0894 251.814 17.8188 252.15 17.4776C252.485 17.1364 252.751 16.7313 252.933 16.2856C253.115 15.8398 253.208 15.362 253.208 14.8795C253.208 14.397 253.115 13.9192 252.933 13.4734C252.751 13.0276 252.485 12.6226 252.15 12.2814C251.814 11.9402 251.415 11.6695 250.977 11.4849C250.538 11.3002 250.068 11.2052 249.594 11.2052H231.394C230.435 11.2052 229.516 11.5923 228.838 12.2814C228.16 12.9704 227.779 13.905 227.779 14.8795C227.779 15.8539 228.16 16.7885 228.838 17.4776C229.516 18.1666 230.435 18.5537 231.394 18.5537ZM48.5869 18.5798H44.5649C43.5995 18.5798 42.6736 18.19 41.991 17.496C41.3084 16.8021 40.9249 15.8609 40.9249 14.8795C40.9249 13.8981 41.3084 12.9569 41.991 12.263C42.6736 11.569 43.5995 11.1792 44.5649 11.1792H48.5869V18.5798ZM137.616 29.759H145.212V22.7231H137.616C135.57 22.7231 133.608 21.8967 132.161 20.4258C130.714 18.9548 129.901 16.9597 129.901 14.8795C129.901 12.7992 130.714 10.8042 132.161 9.33318C133.608 7.86221 135.57 7.03583 137.616 7.03583H145.212V0H137.616C133.734 0 130.012 1.56766 127.267 4.3581C124.522 7.14854 122.979 10.9332 122.979 14.8795C122.979 18.8258 124.522 22.6104 127.267 25.4009C130.012 28.1913 133.734 29.759 137.616 29.759ZM143.369 18.5798H139.347C138.381 18.5798 137.456 18.19 136.773 17.496C136.09 16.8021 135.707 15.8609 135.707 14.8795C135.707 13.8981 136.09 12.9569 136.773 12.263C137.456 11.569 138.381 11.1792 139.347 11.1792H143.369V18.5798ZM52.5754 0H74.8309V7.03583H67.1125V29.8632H60.1913V7.03583H52.5754V0ZM169.603 0H147.35V7.03583H154.963V29.8632H161.884V7.03583H169.603V0ZM213.242 11.5909C213.024 12.6731 212.913 13.7748 212.911 14.8795C212.911 21.1336 216.367 26.6319 221.555 29.759H204.434C200.552 29.759 196.829 28.1913 194.084 25.4009C191.339 22.6104 189.797 18.8258 189.797 14.8795C189.797 10.9332 191.339 7.14854 194.084 4.3581C196.829 1.56766 200.552 0 204.434 0H221.555C218.734 1.68056 216.418 4.11363 214.86 7.03583H204.434C202.388 7.03583 200.425 7.86221 198.978 9.33318C197.531 10.8042 196.718 12.7992 196.718 14.8795C196.718 16.9597 197.531 18.9548 198.978 20.4258C200.425 21.8967 202.388 22.7231 204.434 22.7231H208.569V18.6267H202.645V11.5909H213.242ZM49.284 44.6775L46.1413 54.942H44.411L41.9783 46.7961L39.5456 54.942H37.8127L34.6444 44.6775H36.3567L38.6792 53.2951L41.1862 44.6775H42.8985L45.3492 53.3134L47.6332 44.6775H49.284ZM61.2423 54.942L64.3927 44.6775H62.7342L60.4502 53.3134L57.9996 44.6775H56.2872L53.7802 53.2951L51.4578 44.6775H49.7454L52.9138 54.942H54.6466L57.0793 46.7961L59.512 54.942H61.2423ZM79.5015 44.6775L76.351 54.942H74.6207L72.188 46.7961L69.7554 54.942H68.0225L64.8541 44.6775H66.5665L68.8889 53.2951L71.396 44.6775H73.1083L75.5589 53.3134L77.8429 44.6775H79.5015ZM80.5687 54.1267C80.613 54.3528 80.7225 54.5604 80.8832 54.7231C80.989 54.8324 81.1157 54.9185 81.2554 54.9763C81.3951 55.0341 81.5449 55.0623 81.6958 55.0593C81.8419 55.0614 81.9868 55.0327 82.1214 54.9748C82.256 54.9169 82.3773 54.8312 82.4776 54.7231C82.6847 54.5001 82.8001 54.2051 82.8001 53.8984C82.8001 53.5917 82.6847 53.2966 82.4776 53.0736C82.3773 52.9655 82.256 52.8798 82.1214 52.822C81.9868 52.7641 81.8419 52.7353 81.6958 52.7375C81.4689 52.7363 81.2469 52.8037 81.0579 52.9312C80.8689 53.0587 80.7215 53.2404 80.6344 53.4533C80.5472 53.6661 80.5244 53.9006 80.5687 54.1267ZM91.488 45.0814C92.0986 45.4229 92.605 45.9287 92.9517 46.5433V44.6697H94.6487V55.1661C94.6642 56.0373 94.4613 56.8983 94.0591 57.6678C93.6707 58.3922 93.085 58.9876 92.3723 59.3824C91.5845 59.8094 90.7015 60.0221 89.8089 60C88.4845 60 87.3797 59.6812 86.4945 59.0436C86.0672 58.7464 85.7066 58.3605 85.4367 57.9113C85.1667 57.4622 84.9934 56.96 84.9282 56.4378H86.5867C86.7717 57.0661 87.1777 57.6032 87.7275 57.9466C88.3512 58.3402 89.0751 58.5387 89.8089 58.5173C90.2244 58.5332 90.6387 58.4634 91.0269 58.312C91.415 58.1606 91.769 57.9308 92.0673 57.6365C92.6518 57.051 92.9431 56.2267 92.9414 55.1635V53.0111C92.5883 53.6336 92.0799 54.1504 91.4675 54.5094C90.7751 54.9196 89.9846 55.1271 89.1835 55.1088C88.3227 55.1202 87.4762 54.8856 86.7402 54.4318C86.0042 53.978 85.4083 53.3232 85.0205 52.542C84.5952 51.6838 84.3831 50.7327 84.4027 49.772C84.3828 48.8125 84.5987 47.8631 85.0307 47.0098C85.4229 46.2424 86.02 45.603 86.7534 45.1648C87.4932 44.7253 88.3369 44.4991 89.1937 44.5107C89.9948 44.4902 90.7867 44.6872 91.488 45.0814ZM92.4928 47.7603C92.2081 47.2111 91.7773 46.7542 91.2496 46.4417C90.7245 46.1427 90.1327 45.9857 89.5308 45.9857C88.9289 45.9857 88.3371 46.1427 87.812 46.4417C87.2881 46.7495 86.8599 47.2011 86.5765 47.7446C86.2631 48.3717 86.1097 49.0689 86.1304 49.772C86.1135 50.4837 86.2712 51.1885 86.5893 51.8228C86.8709 52.3751 87.2989 52.8363 87.8249 53.1544C88.3445 53.4615 88.9362 53.6199 89.5372 53.613C90.1399 53.6194 90.7335 53.4629 91.2573 53.1596C91.7867 52.8435 92.2176 52.3819 92.5005 51.828C92.8025 51.1963 92.9594 50.503 92.9594 49.8006C92.9594 49.0983 92.8025 48.405 92.5005 47.7733L92.4928 47.7603ZM98.5732 50.4469H106.638C106.674 50.1076 106.694 49.7667 106.697 49.4254C106.712 48.5475 106.506 47.6801 106.099 46.9055C105.707 46.1681 105.115 45.5597 104.395 45.1518C103.617 44.7167 102.74 44.4974 101.852 44.516C100.942 44.497 100.044 44.7197 99.2448 45.1622C98.4922 45.5871 97.8803 46.2291 97.4863 47.0072C97.0528 47.8702 96.837 48.8292 96.8583 49.798C96.8377 50.7714 97.06 51.7342 97.5042 52.5967C97.9094 53.3774 98.5258 54.0239 99.2807 54.4599C100.064 54.904 100.948 55.1305 101.844 55.1166C102.925 55.1551 103.987 54.8289 104.866 54.1889C105.66 53.5967 106.231 52.7475 106.486 51.7811H104.692C104.506 52.3411 104.146 52.8248 103.667 53.1596C103.13 53.5211 102.495 53.7033 101.852 53.6808C101.426 53.6951 101.001 53.622 100.603 53.4659C100.205 53.3097 99.8428 53.0736 99.5367 52.7718C99.2307 52.47 98.9877 52.1085 98.8221 51.7091C98.6566 51.3096 98.5719 50.8804 98.5732 50.4469ZM103.385 46.3166C103.862 46.5529 104.262 46.9238 104.538 47.385H104.543C104.833 47.8932 104.977 48.4736 104.959 49.0606H98.5834C98.6203 48.1923 98.988 47.3728 99.6088 46.7752C100.199 46.2278 100.974 45.9328 101.772 45.9518C102.33 45.9449 102.882 46.0698 103.385 46.3166ZM110.955 46.0821V52.1329C110.955 52.6332 111.06 52.985 111.267 53.1909C111.475 53.3968 111.839 53.501 112.354 53.501H113.59V54.942H112.077C111.144 54.942 110.444 54.724 109.978 54.288C109.511 53.8519 109.278 53.1336 109.278 52.1329V46.0821H107.968V44.6775H109.278V42.0925H110.955V44.6775H113.59V46.0821H110.955ZM115.653 53.5844C116.032 54.0834 116.534 54.4711 117.109 54.7075C117.768 54.9891 118.476 55.1301 119.191 55.1218C119.852 55.1345 120.508 55.0039 121.116 54.7388C121.637 54.5135 122.086 54.1465 122.415 53.6782C122.72 53.2334 122.88 52.7033 122.874 52.1616C122.886 51.6101 122.704 51.0724 122.362 50.645C122.044 50.265 121.643 49.9667 121.19 49.7746C120.613 49.5397 120.023 49.3422 119.421 49.1831C118.963 49.0608 118.511 48.9138 118.068 48.7427C117.765 48.6285 117.489 48.451 117.258 48.2215C117.151 48.1123 117.067 47.982 117.011 47.8386C116.956 47.6951 116.93 47.5417 116.935 47.3876C116.93 47.1822 116.976 46.9788 117.069 46.7965C117.162 46.6142 117.3 46.459 117.468 46.3453C117.894 46.0622 118.398 45.9244 118.906 45.9518C119.465 45.9215 120.017 46.0942 120.462 46.4391C120.653 46.5976 120.809 46.7959 120.919 47.0206C121.028 47.2454 121.089 47.4913 121.098 47.742H122.774C122.77 47.2906 122.668 46.8456 122.478 46.4379C122.287 46.0302 122.011 45.6696 121.669 45.3811C120.984 44.8078 120.081 44.5212 118.96 44.5212C118.296 44.509 117.638 44.6396 117.027 44.9042C116.505 45.1244 116.053 45.4847 115.717 45.9466C115.418 46.3653 115.257 46.87 115.258 47.3876C115.234 47.9671 115.416 48.5361 115.771 48.9902C116.1 49.3895 116.517 49.7038 116.989 49.9075C117.584 50.1549 118.197 50.3587 118.821 50.5173C119.453 50.6591 120.065 50.876 120.647 51.1635C120.829 51.2548 120.982 51.3978 121.087 51.5754C121.191 51.7529 121.243 51.9574 121.236 52.1642C121.238 52.3775 121.189 52.5882 121.093 52.7777C120.996 52.9672 120.855 53.1296 120.682 53.2508C120.24 53.56 119.709 53.7112 119.173 53.6808C118.577 53.7064 117.99 53.5304 117.504 53.1805C117.303 53.0364 117.136 52.8496 117.013 52.6332C116.891 52.4168 116.816 52.1758 116.794 51.927H115.063C115.091 52.5273 115.296 53.1051 115.653 53.5844ZM134.392 50.4469H126.32C126.318 50.8806 126.403 51.3101 126.569 51.7097C126.734 52.1093 126.978 52.4709 127.284 52.7728C127.59 53.0746 127.953 53.3106 128.351 53.4666C128.749 53.6227 129.174 53.6955 129.601 53.6808C130.244 53.7033 130.879 53.5211 131.416 53.1596C131.895 52.8248 132.255 52.3411 132.441 51.7811H134.235C133.98 52.7475 133.409 53.5967 132.615 54.1889C131.736 54.8282 130.673 55.1543 129.593 55.1166C128.697 55.1305 127.812 54.904 127.03 54.4599C126.274 54.0247 125.658 53.378 125.253 52.5967C124.809 51.7342 124.587 50.7714 124.607 49.798C124.585 48.8295 124.8 47.8705 125.233 47.0072C125.629 46.2298 126.241 45.5882 126.994 45.1622C127.792 44.719 128.691 44.4962 129.601 44.516C130.489 44.4978 131.365 44.717 132.144 45.1518C132.863 45.5599 133.454 46.1671 133.848 46.9029C134.254 47.6779 134.459 48.545 134.446 49.4228C134.444 49.7649 134.426 50.1067 134.392 50.4469ZM132.29 47.385C132.015 46.9239 131.615 46.553 131.139 46.3166C130.636 46.0698 130.084 45.9449 129.526 45.9518C128.728 45.9326 127.953 46.2276 127.363 46.7752C126.742 47.3727 126.374 48.1923 126.338 49.0606H132.713C132.729 48.4727 132.583 47.892 132.29 47.385ZM138.703 52.1329V46.0821H141.339V44.6775H138.703V42.0925H137.027V44.6775H135.717V46.0821H137.027V52.1329C137.027 53.1336 137.26 53.8519 137.727 54.288C138.193 54.724 138.893 54.942 139.826 54.942H141.339V53.501H140.103C139.588 53.501 139.226 53.3968 139.016 53.1909C138.806 52.985 138.703 52.6332 138.703 52.1329ZM149.823 45.0814C150.433 45.4236 150.94 45.9292 151.287 46.5433V44.6697H152.981V55.1661C152.997 56.0373 152.794 56.8982 152.392 57.6677C152.005 58.3927 151.42 58.9882 150.708 59.3824C149.92 59.8088 149.037 60.0215 148.144 60C146.816 60 145.711 59.6812 144.827 59.0436C144.4 58.7464 144.039 58.3604 143.769 57.9113C143.5 57.4621 143.326 56.9599 143.261 56.4378H144.92C145.106 57.0663 145.512 57.6033 146.063 57.9466C146.687 58.3402 147.41 58.5387 148.144 58.5172C148.56 58.5332 148.974 58.4634 149.362 58.312C149.75 58.1606 150.104 57.9308 150.403 57.6365C150.984 57.051 151.275 56.2267 151.277 55.1635V53.0111C150.924 53.6336 150.415 54.1504 149.803 54.5094C149.11 54.9196 148.32 55.1271 147.519 55.1088C146.658 55.1206 145.811 54.8863 145.074 54.4325C144.338 53.9787 143.741 53.3236 143.353 52.542C142.929 51.6835 142.718 50.7325 142.738 49.772C142.717 48.8127 142.932 47.8633 143.364 47.0098C143.757 46.2434 144.354 45.6044 145.086 45.1648C145.827 44.7253 146.671 44.4992 147.529 44.5107C148.33 44.4906 149.122 44.6876 149.823 45.0814ZM150.826 47.7602C150.542 47.2105 150.111 46.7535 149.582 46.4417C149.058 46.1427 148.466 45.9856 147.865 45.9856C147.263 45.9856 146.672 46.1427 146.147 46.4417C145.623 46.7487 145.194 47.2005 144.912 47.7446C144.593 48.3683 144.434 49.0639 144.45 49.7668C144.433 50.4788 144.592 51.184 144.912 51.8176C145.193 52.3705 145.621 52.8319 146.147 53.1492C146.667 53.4562 147.259 53.6147 147.86 53.6078C148.464 53.6131 149.058 53.4548 149.582 53.1492C150.112 52.8337 150.543 52.372 150.826 51.8176C151.129 51.1863 151.287 50.4929 151.287 49.7902C151.287 49.0875 151.129 48.3941 150.826 47.7628V47.7602ZM155.855 52.5994C156.267 53.3814 156.889 54.0277 157.649 54.4625C158.434 54.9009 159.318 55.1245 160.213 55.1114C161.126 55.1227 162.027 54.8967 162.83 54.4547C163.612 54.0228 164.259 53.3775 164.699 52.5915C165.172 51.7384 165.411 50.7719 165.391 49.7928C165.412 48.8184 165.18 47.8555 164.717 47.002C164.29 46.2231 163.654 45.5834 162.884 45.157C162.082 44.7324 161.19 44.5108 160.286 44.5108C159.381 44.5108 158.49 44.7324 157.688 45.157C156.916 45.5845 156.28 46.2273 155.855 47.0098C155.4 47.8657 155.175 48.8282 155.201 49.8007C155.181 50.775 155.406 51.7384 155.855 52.5994ZM163.197 51.8853C162.901 52.4353 162.456 52.8875 161.915 53.1883L161.918 53.1805C161.397 53.4646 160.814 53.6107 160.223 53.6052C159.644 53.6109 159.073 53.4656 158.565 53.1831C158.047 52.8856 157.627 52.4397 157.357 51.901C157.039 51.2439 156.884 50.5173 156.906 49.785C156.884 49.0575 157.043 48.3359 157.367 47.6873C157.644 47.1518 158.069 46.7105 158.59 46.4182C159.109 46.1409 159.686 45.996 160.272 45.996C160.858 45.996 161.435 46.1409 161.953 46.4182C162.484 46.715 162.919 47.161 163.207 47.7029C163.542 48.3484 163.706 49.0712 163.684 49.8007C163.704 50.5269 163.536 51.2459 163.197 51.8853ZM167.337 54.7231C167.176 54.5606 167.067 54.3532 167.022 54.1273C166.978 53.9014 167.001 53.6672 167.087 53.4545C167.174 53.2417 167.321 53.0599 167.51 52.9323C167.698 52.8046 167.92 52.7368 168.147 52.7375C168.291 52.7369 168.433 52.7665 168.566 52.8243C168.698 52.8822 168.817 52.967 168.916 53.0736C169.123 53.2966 169.238 53.5917 169.238 53.8984C169.238 54.2051 169.123 54.5001 168.916 54.7231C168.817 54.8297 168.698 54.9146 168.566 54.9724C168.433 55.0302 168.291 55.0598 168.147 55.0593C167.996 55.0626 167.847 55.0344 167.707 54.9766C167.568 54.9188 167.442 54.8325 167.337 54.7231ZM173.473 46.0821H175.593V44.6906H173.481V43.9609C173.481 43.2912 173.63 42.8039 173.932 42.5095C174.235 42.215 174.752 42.0691 175.491 42.0691V40.6463C174.194 40.6358 173.254 40.8964 172.671 41.428C172.088 41.9596 171.797 42.7996 171.797 43.9479V44.6775H170.49V46.0821H171.797V54.942H173.473V46.0821ZM177.598 42.6736C177.437 42.5111 177.328 42.3037 177.284 42.0778C177.239 41.8519 177.262 41.6177 177.349 41.4049C177.436 41.1922 177.583 41.0104 177.771 40.8828C177.96 40.7551 178.181 40.6873 178.408 40.6879C178.555 40.6854 178.701 40.7143 178.836 40.7726C178.971 40.831 179.092 40.9176 179.192 41.0267C179.4 41.249 179.516 41.5437 179.516 41.8502C179.516 42.1566 179.4 42.4514 179.192 42.6736C179.092 42.7822 178.97 42.8685 178.835 42.9268C178.7 42.9851 178.555 43.0142 178.408 43.0124C178.257 43.0149 178.108 42.9861 177.969 42.9279C177.829 42.8696 177.703 42.7831 177.598 42.6736ZM179.221 44.6775V54.942H177.542V44.6775H179.221ZM184.122 52.1329V46.0821H186.754V44.6775H184.122V42.0925H182.445V44.6775H181.135V46.0821H182.445V52.1329C182.445 53.131 182.676 53.8502 183.145 54.288C183.612 54.724 184.311 54.942 185.244 54.942H186.754V53.501H185.521C185.006 53.501 184.645 53.3968 184.434 53.1909C184.224 52.985 184.122 52.6332 184.122 52.1329ZM196.688 45.6235C197.45 46.3792 197.83 47.4684 197.828 48.8912V54.942H196.17V49.1362C196.17 48.1112 195.919 47.3294 195.416 46.7909C195.149 46.5142 194.826 46.2985 194.471 46.1579C194.115 46.0173 193.734 45.955 193.353 45.9753C192.962 45.956 192.572 46.0213 192.209 46.1669C191.845 46.3124 191.516 46.5349 191.243 46.8196C190.72 47.379 190.459 48.1963 190.459 49.2717V54.9472H188.782V44.6775H190.461V46.1394C190.793 45.6148 191.262 45.1937 191.815 44.9225C192.403 44.6313 193.05 44.4832 193.704 44.4899C194.25 44.467 194.796 44.5555 195.308 44.7502C195.821 44.9449 196.29 45.2418 196.688 45.6235ZM201.66 50.4469H209.733C209.767 50.1067 209.785 49.7649 209.786 49.4228C209.8 48.545 209.595 47.6779 209.189 46.9029C208.795 46.1671 208.204 45.5599 207.484 45.1518C206.706 44.717 205.829 44.4978 204.942 44.516C204.032 44.4962 203.133 44.719 202.335 45.1622C201.582 45.5882 200.97 46.2298 200.574 47.0072C200.159 47.8791 199.945 48.8356 199.948 49.8041C199.951 50.7725 200.171 51.7275 200.592 52.5967C200.998 53.3776 201.615 54.024 202.371 54.4599C203.153 54.904 204.038 55.1305 204.934 55.1166C206.014 55.1543 207.077 54.8282 207.956 54.1889C208.75 53.5967 209.321 52.7475 209.576 51.7811H207.782C207.596 52.3411 207.236 52.8248 206.757 53.1596C206.219 53.5208 205.585 53.7029 204.942 53.6808C204.515 53.6955 204.09 53.6227 203.692 53.4666C203.294 53.3106 202.931 53.0746 202.625 52.7728C202.319 52.4709 202.075 52.1093 201.91 51.7097C201.744 51.3101 201.659 50.8806 201.66 50.4469ZM206.485 46.3166C206.961 46.553 207.361 46.9239 207.636 47.385C207.928 47.8925 208.074 48.4729 208.059 49.0606H201.684C201.72 48.1923 202.088 47.3727 202.709 46.7752C203.299 46.2276 204.074 45.9326 204.872 45.9518C205.43 45.9449 205.982 46.0698 206.485 46.3166ZM213.491 54.7075C212.916 54.4711 212.413 54.0835 212.035 53.5844C211.679 53.1046 211.474 52.5271 211.445 51.927H213.178C213.199 52.1759 213.274 52.4171 213.397 52.6336C213.519 52.8501 213.687 53.0367 213.888 53.1805C214.375 53.5255 214.961 53.6968 215.554 53.6678C216.09 53.6986 216.622 53.5473 217.064 53.2378C217.237 53.1166 217.378 52.9541 217.474 52.7647C217.571 52.5752 217.62 52.3645 217.618 52.1511C217.625 51.9443 217.573 51.7399 217.468 51.5623C217.364 51.3848 217.211 51.2418 217.028 51.1505C216.447 50.8626 215.834 50.6456 215.203 50.5042C214.579 50.3452 213.966 50.1415 213.37 49.8945C212.9 49.6901 212.484 49.3758 212.155 48.9772C211.799 48.5237 211.617 47.9543 211.643 47.3746C211.641 46.8565 211.803 46.3514 212.104 45.9336C212.439 45.4724 212.891 45.1121 213.411 44.8912C214.023 44.6266 214.682 44.496 215.347 44.5081C216.464 44.5081 217.367 44.7948 218.056 45.3681C218.398 45.6566 218.674 46.0172 218.864 46.4248C219.055 46.8325 219.156 47.2775 219.161 47.729H217.484C217.475 47.4784 217.414 47.2327 217.304 47.0081C217.195 46.7834 217.039 46.585 216.849 46.4261C216.402 46.0812 215.85 45.9086 215.29 45.9388C214.783 45.9117 214.28 46.0496 213.855 46.3322C213.686 46.4458 213.548 46.601 213.455 46.7833C213.361 46.9655 213.314 47.169 213.319 47.3746C213.314 47.5286 213.34 47.6821 213.396 47.8255C213.451 47.9689 213.535 48.0993 213.642 48.2085C213.874 48.4372 214.149 48.6147 214.452 48.7296C214.896 48.9011 215.349 49.0482 215.808 49.17C216.409 49.3299 217 49.5275 217.577 49.7616C218.029 49.9538 218.429 50.2521 218.746 50.6319C219.087 51.0605 219.268 51.5975 219.258 52.1485C219.265 52.6907 219.103 53.2212 218.797 53.6652C218.468 54.1335 218.018 54.5005 217.497 54.7257C216.89 54.9912 216.233 55.1218 215.572 55.1088C214.859 55.1212 214.15 54.9847 213.491 54.7075ZM221.653 53.5844C222.031 54.0835 222.534 54.4711 223.109 54.7075C223.769 54.9841 224.479 55.1198 225.193 55.1062C225.854 55.1192 226.51 54.9886 227.118 54.7231C227.642 54.5003 228.096 54.1341 228.428 53.6652C228.734 53.2213 228.895 52.6907 228.889 52.1485C228.899 51.5975 228.717 51.0605 228.376 50.6319C228.06 50.2521 227.659 49.9538 227.208 49.7616C226.631 49.5275 226.04 49.3299 225.439 49.1701C224.979 49.0482 224.527 48.9012 224.083 48.7297C223.78 48.6147 223.504 48.4372 223.273 48.2085C223.166 48.0991 223.083 47.9686 223.028 47.8252C222.973 47.6818 222.947 47.5285 222.952 47.3746C222.948 47.169 222.994 46.9656 223.088 46.7833C223.182 46.601 223.319 46.4458 223.488 46.3323C223.913 46.0496 224.416 45.9118 224.924 45.9388C225.483 45.9086 226.036 46.0812 226.482 46.4261C226.673 46.5851 226.828 46.7834 226.938 47.0081C227.047 47.2327 227.109 47.4784 227.118 47.729H228.779C228.774 47.2776 228.673 46.8326 228.482 46.4249C228.292 46.0172 228.016 45.6566 227.674 45.3681C226.985 44.7948 226.082 44.5082 224.965 44.5082C224.3 44.4957 223.641 44.6263 223.029 44.8912C222.509 45.1121 222.057 45.4724 221.722 45.9336C221.42 46.3514 221.259 46.8565 221.26 47.3746C221.235 47.9543 221.417 48.5237 221.773 48.9772C222.102 49.3758 222.518 49.6901 222.988 49.8945C223.584 50.1415 224.197 50.3453 224.821 50.5042C225.452 50.6456 226.065 50.8626 226.646 51.1505C226.829 51.2418 226.982 51.3848 227.086 51.5623C227.191 51.7399 227.243 51.9443 227.236 52.1512C227.238 52.3645 227.189 52.5752 227.092 52.7647C226.996 52.9541 226.855 53.1166 226.682 53.2378C226.24 53.5473 225.708 53.6986 225.172 53.6678C224.578 53.6964 223.992 53.5251 223.503 53.1805C223.303 53.0362 223.136 52.8494 223.014 52.633C222.892 52.4165 222.817 52.1756 222.796 51.9271H221.063C221.09 52.5273 221.296 53.1051 221.653 53.5844Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="264.231" height="60" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Grid>
            <Grid item container justify="center" style={{ marginTop: "20px" }}>
              <svg
                width="173"
                height="102"
                viewBox="0 0 173 102"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M148.974 0H145.236V3.755H148.974V0Z"
                  fill="white"
                  fill-opacity="0.2"
                />
                <path
                  d="M145.237 3.75781H141.498V7.51281H145.236V11.2678H148.974V3.75781H145.237Z"
                  fill="white"
                />
                <path
                  d="M152.713 3.75781H148.975V7.51281H152.713V3.75781Z"
                  fill="white"
                  fill-opacity="0.2"
                />
                <path
                  d="M8.88155 25.2266H4.63354V29.4936H8.88155V25.2266Z"
                  fill="white"
                  fill-opacity="0.2"
                />
                <path
                  d="M4.6345 29.4922H0.385498V33.7592H4.6335V38.0262H8.8815V29.4922H4.6345Z"
                  fill="white"
                />
                <path
                  d="M13.1296 29.4922H8.88159V33.7592H13.1296V29.4922Z"
                  fill="white"
                  fill-opacity="0.2"
                />
                <path
                  d="M17.7295 3.57031H14.9175V6.39531H17.7295V3.57031Z"
                  fill="white"
                  fill-opacity="0.2"
                />
                <path
                  d="M14.9135 6.39844H12.1055V9.22343H14.9135V12.0484H17.7255V6.39844H14.9135Z"
                  fill="white"
                />
                <path
                  d="M20.5425 6.39844H17.7305V9.22344H20.5425V6.39844Z"
                  fill="white"
                  fill-opacity="0.2"
                />
                <path
                  d="M46.0123 11.6016H42.5283V15.1006H46.0123V11.6016Z"
                  fill="white"
                  fill-opacity="0.2"
                />
                <path
                  d="M42.5284 15.1016H39.0444V18.6016H42.5284V22.1016H46.0124V15.1016H42.5284Z"
                  fill="white"
                />
                <path
                  d="M49.4955 15.1016H46.0115V18.6006H49.4955V15.1016Z"
                  fill="white"
                  fill-opacity="0.2"
                />
                <path
                  d="M169.944 2.0625H167.273V4.7445H169.944V2.0625Z"
                  fill="white"
                  fill-opacity="0.2"
                />
                <path
                  d="M167.274 4.74219H164.603V7.42419H167.274V10.1022H169.945V4.74219H167.274Z"
                  fill="white"
                />
                <path
                  d="M172.615 4.74219H169.944V7.42419H172.615V4.74219Z"
                  fill="white"
                  fill-opacity="0.2"
                />
                <path
                  d="M162.465 20.0078H160.327V22.1548H162.465V20.0078Z"
                  fill="white"
                  fill-opacity="0.2"
                />
                <path
                  d="M160.327 22.1562H158.189V24.3032H160.327V26.4502H162.465V22.1562H160.327Z"
                  fill="white"
                />
                <path
                  d="M164.602 22.1562H162.464V24.3033H164.602V22.1562Z"
                  fill="white"
                  fill-opacity="0.2"
                />
                <path
                  d="M156.414 50.8906H151.831V55.4936H156.414V50.8906Z"
                  fill="white"
                  fill-opacity="0.2"
                />
                <path
                  d="M151.832 55.4922H147.248V60.0922H151.831V64.6922H156.414V55.4922H151.832Z"
                  fill="white"
                />
                <path
                  d="M160.997 55.4922H156.414V60.0952H160.997V55.4922Z"
                  fill="white"
                  fill-opacity="0.2"
                />
                <path
                  d="M14.2136 62.6172H8.24561V68.6112H14.2136V62.6172Z"
                  fill="white"
                  fill-opacity="0.2"
                />
                <path
                  d="M8.24659 68.6094H2.27759V74.6034H8.24559V80.5974H14.2136V68.6094H8.24659Z"
                  fill="white"
                />
                <path
                  d="M20.1816 68.6094H14.2136V74.6034H20.1816V68.6094Z"
                  fill="white"
                  fill-opacity="0.2"
                />
                <path
                  d="M70.9492 43.7611L60.5415 50.7812L84.2339 85.9067L94.6417 78.8866L70.9492 43.7611Z"
                  fill="white"
                  fill-opacity="0.2"
                />
                <path
                  d="M138.887 43.6989C137.841 42.1118 136.218 40.9948 134.362 40.5849C134.887 39.586 135.175 38.4795 135.204 37.3512C135.233 36.2229 135.001 35.1031 134.528 34.0788C134.054 33.0544 133.35 32.153 132.472 31.4444C131.593 30.7358 130.563 30.2391 129.462 29.9929C130.074 28.8254 130.361 27.5149 130.294 26.1983C130.227 24.8817 129.808 23.6072 129.081 22.5079C128.035 20.9204 126.412 19.8032 124.556 19.3939C125.316 17.9483 125.574 16.2906 125.289 14.6822C125.003 13.0737 124.19 11.6061 122.978 10.5108C121.767 9.4154 120.224 8.75461 118.595 8.6326C116.966 8.51058 115.343 8.93429 113.982 9.8369L106.659 14.6869C102.758 12.7072 98.5942 11.2969 94.2936 10.4989C92.9327 8.43287 91.3503 6.52155 89.5746 4.7989L86.5446 1.8629C85.3713 0.724789 83.8188 0.0603284 82.1854 -0.00285471C80.552 -0.0660379 78.9528 0.476512 77.6951 1.52058C76.4374 2.56465 75.6097 4.03662 75.3712 5.65374C75.1326 7.27087 75.4999 8.91912 76.4026 10.2819C76.482 10.4026 76.56 10.5236 76.6366 10.6449C68.7466 12.2517 61.4144 15.8954 55.3689 21.2139C49.3233 26.5323 44.7748 33.3402 42.1754 40.9611C39.576 48.582 39.0163 56.7504 40.5518 64.6546C42.0874 72.5589 45.6647 79.9236 50.9283 86.017C56.1919 92.1103 62.9585 96.7201 70.5556 99.3882C78.1526 102.056 86.3157 102.69 94.2335 101.226C102.151 99.7616 109.548 96.251 115.689 91.0426C121.829 85.8343 126.5 79.1096 129.237 71.5369C129.312 71.34 129.347 71.1302 129.34 70.9196C129.333 70.709 129.285 70.5018 129.197 70.3103C129.109 70.1187 128.984 69.9466 128.829 69.8039C128.674 69.6613 128.492 69.5509 128.294 69.4794C128.095 69.4078 127.885 69.3765 127.674 69.3872C127.464 69.3979 127.258 69.4504 127.068 69.5417C126.878 69.633 126.708 69.7612 126.568 69.9188C126.429 70.0765 126.322 70.2604 126.254 70.4599C122.436 80.9979 114.657 89.6304 104.572 94.5207C94.4872 99.411 82.892 100.173 72.2536 96.6449L85.1596 88.0989L95.8846 80.9989C96.3593 80.6856 96.7675 80.2817 97.0859 79.8105C97.4044 79.3392 97.6267 78.8098 97.7403 78.2525C97.8539 77.6952 97.8565 77.121 97.7479 76.5627C97.6394 76.0044 97.4218 75.473 97.1076 74.9989L96.9656 74.7839L99.0486 73.4039C100.529 72.4204 102.327 72.0312 104.082 72.3139C106.623 72.7244 109.225 72.1616 111.37 70.7379L128.654 59.2989C128.537 60.7927 128.342 62.2794 128.07 63.7529C128.031 63.9577 128.034 64.168 128.077 64.3718C128.12 64.5757 128.203 64.769 128.321 64.9407C128.439 65.1124 128.59 65.2592 128.765 65.3727C128.939 65.4861 129.135 65.564 129.34 65.6019C129.436 65.6201 129.533 65.6291 129.631 65.6289C130.001 65.6282 130.36 65.4978 130.644 65.2603C130.929 65.0229 131.121 64.6933 131.188 64.3289C131.628 61.948 131.882 59.5363 131.946 57.1159L136.816 53.8909C137.622 53.3575 138.315 52.6705 138.855 51.8691C139.396 51.0677 139.773 50.1676 139.966 49.2203C140.158 48.273 140.162 47.2971 139.977 46.3483C139.792 45.3995 139.422 44.4965 138.888 43.6909L138.887 43.6989ZM103.582 16.7259L98.7356 19.9349L97.7816 17.3649C97.3814 16.2919 96.9272 15.2399 96.4206 14.2129C98.8777 14.8357 101.274 15.6768 103.582 16.7259ZM53.3546 27.7259C59.7683 20.3239 68.5181 15.3348 78.1546 13.5849C79.7072 17.3422 80.0525 21.4895 79.1426 25.4519L75.2766 42.1529C74.5788 41.4087 73.64 40.9357 72.6266 40.8176C71.6133 40.6996 70.5909 40.9441 69.7406 41.5079L58.7816 48.7599L42.9816 59.2229C42.8956 58.1089 42.8496 56.9859 42.8496 55.8639C42.8489 45.5246 46.5777 35.5321 53.3516 27.7209L53.3546 27.7259ZM94.6316 77.6139C94.6016 77.7627 94.5424 77.9041 94.4575 78.0299C94.3725 78.1558 94.2635 78.2635 94.1366 78.3469L84.7166 84.5839L67.2336 58.5119C66.9971 58.1679 66.6344 57.9311 66.2244 57.8528C65.8143 57.7744 65.3899 57.8609 65.0433 58.0935C64.6966 58.3261 64.4556 58.686 64.3725 59.0951C64.2895 59.5042 64.3711 59.9296 64.5996 60.2789L82.0716 86.3359L68.6236 95.2359C62.038 92.3464 56.2802 87.8549 51.8746 82.1706C47.4691 76.4864 44.556 69.7901 43.4006 62.6919L59.2176 52.2519L61.0376 54.9679C61.1538 55.141 61.3029 55.2895 61.4764 55.4049C61.65 55.5204 61.8446 55.6005 62.0491 55.6408C62.2536 55.6811 62.4641 55.6806 62.6684 55.6396C62.8728 55.5985 63.067 55.5176 63.2401 55.4014C63.4132 55.2852 63.5617 55.1361 63.6772 54.9626C63.7926 54.789 63.8728 54.5944 63.913 54.3899C63.9533 54.1854 63.9529 53.975 63.9118 53.7706C63.8707 53.5662 63.7898 53.372 63.6736 53.1989L61.8656 50.4989L71.4926 44.1449C71.6191 44.0612 71.7608 44.0032 71.9096 43.9742C72.0585 43.9453 72.2116 43.946 72.3602 43.9763C72.5088 44.0066 72.65 44.0658 72.7756 44.1507C72.9013 44.2356 73.009 44.3444 73.0926 44.4709L94.4656 76.7409C94.5502 76.868 94.6084 77.0107 94.6369 77.1606C94.6654 77.3105 94.6636 77.4647 94.6316 77.6139ZM136.854 48.5909C136.746 49.1301 136.532 49.6425 136.224 50.0984C135.917 50.5543 135.522 50.9447 135.063 51.2469L129.496 54.9329H129.491L109.621 68.0939C108.138 69.0786 106.338 69.4672 104.582 69.1819C102.041 68.7719 99.4383 69.3347 97.2936 70.7579L95.2106 72.1379L77.7106 45.7079L82.2356 26.1639C83.3899 21.1325 82.8014 15.8582 80.5666 11.2049C80.5467 11.1568 80.5243 11.1097 80.4996 11.0639C80.0717 10.1872 79.587 9.33945 79.0486 8.5259C78.5774 7.81523 78.3854 6.95547 78.5096 6.11186C78.6339 5.26824 79.0655 4.5003 79.7215 3.95562C80.3776 3.41094 81.2119 3.12795 82.0639 3.16104C82.916 3.19413 83.7258 3.54097 84.3376 4.1349L87.3676 7.0719C90.6609 10.2737 93.2012 14.1677 94.8046 18.4719L96.4546 22.9159L96.4636 22.9389L96.4756 22.9699C96.4876 22.9969 96.4986 23.0219 96.5096 23.0429C96.541 23.1121 96.5775 23.179 96.6186 23.2429C96.7335 23.417 96.8816 23.5666 97.0545 23.6833C97.2273 23.8 97.4215 23.8815 97.6258 23.923C97.8302 23.9645 98.0408 23.9653 98.2455 23.9253C98.4501 23.8853 98.6449 23.8053 98.8186 23.6899L115.736 12.4899C116.661 11.8771 117.792 11.657 118.879 11.8779C119.967 12.0988 120.922 12.7427 121.535 13.6679C122.147 14.5931 122.368 15.7238 122.147 16.8114C121.926 17.8989 121.282 18.8541 120.357 19.4669L118.888 20.4399L115.609 22.5989L115.597 22.6079C115.578 22.6209 115.56 22.6339 115.546 22.6459C115.201 22.8867 114.966 23.2546 114.892 23.6687C114.819 24.0828 114.913 24.5091 115.154 24.8539C115.394 25.1987 115.762 25.4337 116.176 25.5072C116.591 25.5807 117.017 25.4867 117.362 25.2459L120.64 23.0749C121.565 22.4682 122.694 22.2528 123.778 22.4759C124.862 22.6991 125.813 23.3425 126.424 24.2655C127.035 25.1884 127.255 26.3158 127.037 27.4008C126.818 28.4858 126.179 29.4401 125.259 30.0549L120.512 33.1989C120.333 33.3116 120.179 33.4589 120.058 33.632C119.937 33.8052 119.852 34.0008 119.807 34.2073C119.763 34.4138 119.76 34.6271 119.8 34.8346C119.839 35.0421 119.919 35.2397 120.036 35.4158C120.152 35.5919 120.303 35.7429 120.479 35.86C120.655 35.9771 120.852 36.058 121.059 36.0977C121.267 36.1375 121.48 36.1355 121.687 36.0917C121.893 36.0479 122.089 35.9634 122.263 35.8429L122.998 35.3569L125.54 33.6739C125.998 33.3623 126.513 33.1448 127.056 33.0339C127.598 32.9231 128.158 32.921 128.701 33.028C129.245 33.1349 129.762 33.3487 130.222 33.6569C130.682 33.9652 131.077 34.3617 131.383 34.8236C131.689 35.2854 131.9 35.8034 132.004 36.3475C132.108 36.8916 132.103 37.4509 131.989 37.993C131.876 38.5352 131.655 39.0494 131.342 39.5058C131.028 39.9622 130.626 40.3518 130.161 40.6519L127.79 42.2219L127.753 42.2469L125.415 43.7949C125.241 43.9099 125.092 44.0579 124.975 44.2306C124.859 44.4033 124.777 44.5972 124.736 44.8013C124.694 45.0054 124.693 45.2157 124.733 45.4202C124.773 45.6246 124.853 45.8192 124.968 45.9929C125.083 46.1666 125.231 46.3159 125.403 46.4324C125.576 46.5488 125.77 46.6301 125.974 46.6716C126.178 46.7131 126.388 46.714 126.593 46.6743C126.797 46.6345 126.992 46.5549 127.166 46.4399L127.901 45.9539L130.443 44.2719C131.132 43.8143 131.942 43.5717 132.77 43.5748C133.598 43.5778 134.406 43.8264 135.093 44.2891C135.779 44.7517 136.313 45.4076 136.626 46.1737C136.94 46.9399 137.019 47.7818 136.854 48.5929V48.5909Z"
                  fill="white"
                />
              </svg>
            </Grid>
            <Grid item container justify="center" style={{ marginTop: "20px" }}>
              <Typography
                variant="h3"
                style={{ ...Styles.colorWhite, ...Styles.boldNormal }}
              >
                We have received your payment of{" "}
                <span style={{ ...Styles.boldTxt }}>₹999</span>
              </Typography>
            </Grid>
            <Grid item container justify="center" style={{ marginTop: "20px" }}>
              <Typography
                variant="h1"
                style={{ ...Styles.colorWhite, ...Styles.boldTxt }}
              >
                THANK YOU
              </Typography>
            </Grid>
            <Grid item container justify="center" style={{ marginTop: "20px" }}>
              <Typography
                variant="h5"
                style={{ ...Styles.colorWhite, ...Styles.boldNormal }}
              >
                One of our representatives will get in touch with you shortly.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container alignItems="center" justify="center">
          <Grid
            item
            container
            alignItems="center"
            justify="flex-start"
            direction="row"
            xs={12}
            sm={12}
            lg={8}
            style={{
              padding: "100px",
              ...Styles.whiteBG,
              boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.25)",
              borderRadius: "10px",
            }}
          >
            <Grid item>
              <Typography
                variant="h3"
                style={{ ...Styles.boldTxt, ...Styles.colorPrimary }}
              >
                Preferred time for call
              </Typography>
            </Grid>
            <Grid item container>
              <Typography variant="h6" style={{ fontFamily: "Roboto" }}>
                What’s the best time to call you for follow-up
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Thankyou;
