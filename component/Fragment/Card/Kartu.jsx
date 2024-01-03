import React from 'react'
import { View, Text } from "react-native";
import tw from "twrnc";

export const Kartu = () => {
  return (
    <View style={tw`w-full font-[n] py-2 px-4 rounded-xl shadow bg-[#3662FF]`}>
      <View style={tw`flex flex-row items-center justify-between`}>
        <View style={tw`flex flex-col`}>
          <Text
            style={tw`mb-2 text-3xl font-semibold tracking-tight text-white`}>
            Hari Ini
          </Text>

          <Text style={tw`mb-2 text-md font-medium tracking-tight text-white`}>
            27, September 2023
          </Text>

          <Text
            style={tw`mb-2 text-2xl font-semibold tracking-tight text-white`}>
            5 Task
          </Text>
        </View>

        {/* gambar */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="130"
          viewBox="0 0 161 97"
          fill="none">
          <path
            opacity="0.25"
            d="M134.505 93.2206L120.065 11.3066H113.646L113.898 10.2693C114.12 9.35305 113.537 8.43525 112.595 8.21901C111.653 8.00278 110.71 8.57006 110.488 9.48602L110.046 11.3066H97.546L97.798 10.2693C98.0203 9.35305 97.4371 8.43525 96.4954 8.21901C95.553 8.00278 94.6103 8.57006 94.3877 9.48602L93.9458 11.3066H81.5119L81.7638 10.2693C81.9861 9.35305 81.4029 8.43525 80.4613 8.21901C79.5191 8.00278 78.5761 8.57006 78.3535 9.48602L77.9116 11.3066H65.5342L65.7861 10.2693C66.0084 9.35305 65.4252 8.43525 64.4836 8.21901C63.542 8.00198 62.5982 8.57006 62.3759 9.48602L61.934 11.3066H57.6845L32.6316 93.2206H108.322L108.321 93.2256H134.505L134.505 93.2206H134.505Z"
            fill="#191038"
          />
          <path
            opacity="0.25"
            d="M146.46 1.8504H127.963L123.451 32.0082H148.304L151.226 6.36093L146.46 1.8504Z"
            fill="#191038"
          />
          <path
            d="M56.5971 11.3065L31.5442 93.2205H133.418L118.978 11.3065H56.5971Z"
            fill="#B28CF5"
          />
          <path
            d="M118.978 11.3065L107.234 93.2256H133.418L118.978 11.3065Z"
            fill="url(#paint0_linear_121_1070)"
          />
          <path
            d="M56.5974 11.3065L51.4998 27.974H116.589L118.978 11.3065H56.5974Z"
            fill="url(#paint1_linear_121_1070)"
          />
          <path
            d="M59.8152 25.7626C61.6528 25.7626 63.1426 24.571 63.1426 23.1012C63.1426 21.6313 61.6528 20.4397 59.8152 20.4397C57.9775 20.4397 56.4878 21.6313 56.4878 23.1012C56.4878 24.571 57.9775 25.7626 59.8152 25.7626Z"
            fill="#3A092A"
          />
          <path
            d="M75.6443 25.7626C77.4819 25.7626 78.9717 24.571 78.9717 23.1012C78.9717 21.6313 77.4819 20.4397 75.6443 20.4397C73.8066 20.4397 72.3169 21.6313 72.3169 23.1012C72.3169 24.571 73.8066 25.7626 75.6443 25.7626Z"
            fill="#3A092A"
          />
          <path
            d="M91.981 25.7626C93.8186 25.7626 95.3083 24.571 95.3083 23.1012C95.3083 21.6313 93.8186 20.4397 91.981 20.4397C90.1433 20.4397 88.6536 21.6313 88.6536 23.1012C88.6536 24.571 90.1433 25.7626 91.981 25.7626Z"
            fill="#3A092A"
          />
          <path
            d="M108.164 25.7626C110.002 25.7626 111.492 24.571 111.492 23.1012C111.492 21.6313 110.002 20.4397 108.164 20.4397C106.327 20.4397 104.837 21.6313 104.837 23.1012C104.837 24.571 106.327 25.7626 108.164 25.7626Z"
            fill="#3A092A"
          />
          <path
            d="M59.8663 24.4725C59.7329 24.4725 59.5978 24.4577 59.4622 24.4265C58.5203 24.2103 57.9371 23.2925 58.1597 22.3763L61.2884 9.48602C61.5107 8.57006 62.4542 8.00198 63.3961 8.21901C64.338 8.43525 64.9212 9.35305 64.6987 10.2693L61.5699 23.1595C61.3797 23.9439 60.6604 24.4725 59.8663 24.4725Z"
            fill="#831778"
          />
          <path
            d="M75.8441 24.4726C75.7109 24.4726 75.5756 24.4578 75.44 24.4266C74.4981 24.2103 73.9149 23.2925 74.1374 22.3763L77.2662 9.48603C77.4887 8.57008 78.4317 8.00253 79.3739 8.21903C80.3158 8.43526 80.899 9.35307 80.6765 10.2693L77.5477 23.1596C77.3572 23.9439 76.6379 24.4726 75.8441 24.4726Z"
            fill="#831778"
          />
          <path
            d="M91.8787 24.4726C91.7456 24.4726 91.6103 24.4578 91.4746 24.4266C90.5327 24.2103 89.9495 23.2925 90.1721 22.3763L93.3008 9.48603C93.5234 8.57008 94.4661 8.00253 95.4086 8.21903C96.3505 8.43526 96.9337 9.35307 96.7111 10.2693L93.5824 23.1596C93.3919 23.9439 92.6725 24.4726 91.8787 24.4726Z"
            fill="#831778"
          />
          <path
            d="M107.978 24.4726C107.845 24.4726 107.71 24.4578 107.574 24.4266C106.632 24.2103 106.049 23.2925 106.271 22.3763L109.4 9.48603C109.623 8.57008 110.566 8.00253 111.508 8.21903C112.45 8.43526 113.033 9.35307 112.81 10.2693L109.682 23.1596C109.491 23.9439 108.772 24.4726 107.978 24.4726Z"
            fill="#831778"
          />
          <path
            d="M86.9797 47.8711L90.5582 29.3907H70.0585L65.5356 47.8711H86.9797Z"
            fill="white"
          />
          <path
            d="M111.332 47.8711L114.14 29.3907H91.8322L88.2534 47.8711H111.332Z"
            fill="white"
          />
          <path
            d="M65.2382 49.0887L60.3167 69.1977H82.8504L86.7441 49.0887H65.2382Z"
            fill="white"
          />
          <path
            d="M60.0182 70.4151L55.0029 90.9071H78.6463L82.6142 70.4151H60.0182Z"
            fill="white"
          />
          <path
            d="M88.0175 49.0887L84.1235 69.1977H108.093L111.147 49.0887H88.0175Z"
            fill="white"
          />
          <path
            d="M79.9199 90.9071H104.795L107.908 70.4151H83.8881L79.9199 90.9071Z"
            fill="white"
          />
          <path
            d="M63.9514 49.0887H47.0501L41.0774 69.1977H59.0299L63.9514 49.0887Z"
            fill="white"
          />
          <path
            d="M40.7157 70.4151L34.6294 90.9071H53.7165L58.7317 70.4151H40.7157Z"
            fill="white"
          />
          <path
            d="M68.7725 29.3907H52.9008L47.4119 47.8711H64.2496L68.7725 29.3907Z"
            fill="white"
          />
          <path
            d="M71.3389 35.8832L74.8429 42.089L86.7437 33.2863"
            stroke="url(#paint2_linear_121_1070)"
            stroke-width="1.97937"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M92.4622 37.2438L95.9662 43.4496L107.867 34.6469"
            stroke="url(#paint3_linear_121_1070)"
            stroke-width="1.97937"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M64.6147 57.3386L68.1188 63.5446L80.0195 54.7416"
            stroke="url(#paint4_linear_121_1070)"
            stroke-width="1.97937"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M75.9295 75.5166C75.5836 75.0971 74.9536 75.03 74.5221 75.3665L69.2378 79.4897L65.4223 75.4659C65.0473 75.0701 64.4138 75.0458 64.0076 75.4101C63.601 75.7749 63.5755 76.3908 63.9502 76.7863L67.6719 80.7113L61.646 85.4132C61.2147 85.7497 61.1454 86.3624 61.4916 86.7822C61.6895 87.0223 61.98 87.1468 62.2732 87.1468C62.4931 87.1468 62.7143 87.0767 62.8991 86.9326L69.0329 82.1464L73.4769 86.8332C73.6745 87.0415 73.9432 87.1468 74.2131 87.1468C74.4558 87.1468 74.6993 87.0614 74.8917 86.8888C75.2982 86.524 75.3238 85.908 74.949 85.5126L70.5985 80.9246L75.7749 76.8857C76.2064 76.5492 76.2755 75.9361 75.9295 75.5166Z"
            fill="#F1008D"
          />
          <path
            d="M118.978 11.3065L123.484 93.0981H107.234L118.978 11.3065Z"
            fill="#421949"
          />
          <path
            opacity="0.32"
            d="M88.6536 51.8165V71.8665C88.6536 71.8665 103.602 68.2114 107.867 68.2746L88.6536 51.8165Z"
            fill="#090D16"
          />
          <path
            d="M88.6536 51.8165C88.6536 51.8165 88.8229 65.7126 90.558 69.9992L107.867 68.2746C107.867 68.2746 103.843 56.7399 103.571 50.6433L88.6536 51.8165Z"
            fill="#EDA054"
          />
          <path
            d="M95.9191 56.6754C97.0268 56.6754 97.9247 55.8019 97.9247 54.7245C97.9247 53.6471 97.0268 52.7736 95.9191 52.7736C94.8115 52.7736 93.9136 53.6471 93.9136 54.7245C93.9136 55.8019 94.8115 56.6754 95.9191 56.6754Z"
            fill="#111F69"
          />
          <path
            opacity="0.32"
            d="M68.1792 31.9683V52.0184C68.1792 52.0184 53.2307 48.3632 48.9661 48.4264L68.1792 31.9683Z"
            fill="#090D16"
          />
          <path
            d="M68.1792 31.9683C68.1792 31.9683 68.0099 45.8644 66.2748 50.1511L48.9661 48.4265C48.9661 48.4265 52.99 36.8918 53.2617 30.7954L68.1792 31.9683Z"
            fill="#EDA054"
          />
          <path
            d="M58.9082 34.8764C58.9082 35.9538 59.8061 36.8272 60.9138 36.8272C62.0214 36.8272 62.9193 35.9538 62.9193 34.8764C62.9193 33.7989 62.0214 32.9255 60.9138 32.9255C59.8061 32.9258 58.9082 33.7992 58.9082 34.8764Z"
            fill="#111F69"
          />
          <path
            opacity="0.32"
            d="M48.5638 37.9825L48.5646 37.983C57.6478 43.3228 62.0524 57.2152 58.5489 71.8277C56.3651 80.937 51.5518 88.4711 45.6748 93.0683H31.2627L48.1749 37.7718"
            fill="#090D16"
          />
          <path
            d="M42.6506 31.2316C42.411 31.1774 42.171 31.1304 41.9308 31.087L35.1662 29.728L34.8224 31.3231C25.2525 33.616 16.4033 43.5866 13.202 56.9384C9.83523 70.9817 13.7716 84.3608 22.1463 90.1216L21.8713 91.3979L27.6214 92.5911C27.7217 92.616 27.8212 92.6422 27.9223 92.6649C28.2236 92.7334 28.5256 92.7905 28.828 92.8415L28.8786 92.8521L28.8818 92.8507C40.803 94.8233 53.4103 83.4786 57.3709 66.9581C61.438 49.9938 54.8476 33.9985 42.6506 31.2316Z"
            fill="url(#paint5_linear_121_1070)"
          />
          <path
            d="M51.534 65.7373C55.6009 48.7724 49.0099 32.7768 36.8126 30.0101C24.6153 27.2434 11.4306 38.7534 7.36375 55.7183C3.29686 72.6832 9.88784 88.6788 22.0851 91.4454C34.2824 94.2121 47.4671 82.7022 51.534 65.7373Z"
            fill="url(#paint6_linear_121_1070)"
          />
          <path
            d="M49.0435 65.1724C52.6518 50.1204 46.804 35.9285 35.9821 33.4738C25.1601 31.0191 13.4621 41.2312 9.85374 56.2831C6.24543 71.3351 12.0932 85.527 22.9152 87.9818C33.7372 90.4365 45.4352 80.2244 49.0435 65.1724Z"
            fill="white"
          />
          <path
            d="M11.104 57.6251C14.7126 42.5736 26.4106 32.3622 37.232 34.8169C39.9857 35.4415 42.4163 36.8275 44.452 38.7929C42.1907 36.1153 39.3234 34.2361 35.9806 33.478C25.1589 31.023 13.4609 41.2347 9.85254 56.2862C7.16215 67.5077 9.72862 78.2501 15.6929 84.0084C10.6333 78.0178 8.61006 68.0274 11.104 57.6251Z"
            fill="#CCC392"
          />
          <path
            d="M35.6829 68.1826L31.7416 61.8822C31.8419 61.6688 31.924 61.4386 31.9827 61.1938C32.3186 59.7931 31.7743 58.4724 30.7674 58.244C30.7402 58.2379 30.7125 58.2358 30.6853 58.2313L30.6851 58.2305L29.8279 58.069L29.7554 58.3844L24.5034 46.9477L28.2371 59.2644H28.8132C28.6034 59.5805 28.4355 59.9519 28.336 60.3664C28.108 61.3178 28.2865 62.2314 28.7398 62.7918L28.6613 63.1325L29.5111 63.3041C29.5247 63.3075 29.5374 63.3131 29.5513 63.3162C29.5793 63.3226 29.6075 63.3247 29.6358 63.3292L29.6733 63.3369L29.6747 63.3353C29.857 63.3593 30.0402 63.3422 30.2206 63.2962L35.6829 68.1826Z"
            fill="#09257F"
          />
          <path
            d="M31.2823 61.1475C30.9442 62.5575 29.8482 63.5142 28.8346 63.2842C27.8207 63.0542 27.2731 61.7246 27.6111 60.3146C27.9492 58.9046 29.0452 57.9479 30.0589 58.1779C31.0725 58.4078 31.6204 59.7372 31.2823 61.1475Z"
            fill="#597CD3"
          />
          <path
            d="M24.6005 86.9246C24.3649 86.8839 24.2078 86.665 24.2497 86.4359L25.1641 81.4329C25.206 81.2037 25.431 81.0509 25.6666 81.0916C25.9022 81.1323 26.0593 81.3512 26.0174 81.5804L25.103 86.5834C25.0611 86.8125 24.8361 86.9653 24.6005 86.9246Z"
            fill="#09257F"
          />
          <path
            d="M42.5964 63.0321C42.6306 62.8018 42.8505 62.6419 43.0874 62.6755L48.2571 63.4051C48.494 63.4384 48.6582 63.6522 48.6237 63.8827C48.5894 64.1132 48.3696 64.2729 48.1326 64.2393L42.963 63.51C42.726 63.4764 42.5619 63.2626 42.5964 63.0321Z"
            fill="#09257F"
          />
          <path
            d="M38.2109 70.177C38.3474 69.9859 38.6175 69.9383 38.814 70.071L43.105 72.969C43.3015 73.1017 43.3504 73.3645 43.2137 73.5556C43.0773 73.747 42.8072 73.7943 42.6107 73.6616L38.3196 70.7639C38.1232 70.6309 38.0745 70.3684 38.2109 70.177Z"
            fill="#09257F"
          />
          <path
            d="M15.5024 48.8489C15.6389 48.6577 15.909 48.6102 16.1055 48.7431L20.3965 51.6411C20.593 51.7739 20.6419 52.0366 20.5052 52.2277C20.3688 52.4189 20.0987 52.4664 19.9022 52.3337L15.6111 49.4357C15.4147 49.3027 15.366 49.04 15.5024 48.8489Z"
            fill="#09257F"
          />
          <path
            d="M34.0127 76.6213C34.2301 76.524 34.4874 76.6165 34.5874 76.8277L36.7726 81.4432C36.8726 81.6547 36.7778 81.905 36.5604 82.0023C36.343 82.0996 36.0856 82.007 35.9856 81.7958L33.8004 77.1804C33.7002 76.9692 33.7953 76.7185 34.0127 76.6213Z"
            fill="#09257F"
          />
          <path
            d="M20.0527 76.174C20.2122 76.3476 20.1967 76.6141 20.0182 76.769L16.1231 80.1547C15.9445 80.3099 15.6706 80.2949 15.5111 80.1212C15.3516 79.9475 15.3671 79.681 15.5456 79.5259L19.4407 76.1401C19.6192 75.9855 19.8932 76.0003 20.0527 76.174Z"
            fill="#09257F"
          />
          <path
            d="M45.5624 41.9196C45.7219 42.0932 45.7064 42.3597 45.5282 42.5149L41.6331 45.9006C41.4546 46.0558 41.1806 46.0407 41.0214 45.8673C40.8618 45.6936 40.8773 45.4272 41.0556 45.272L44.9507 41.8863C45.129 41.7311 45.4029 41.7459 45.5624 41.9196Z"
            fill="#09257F"
          />
          <path
            d="M17.2982 67.5606C17.3485 67.7882 17.1996 68.0123 16.9656 68.0612L11.8582 69.1279C11.6242 69.1768 11.3938 69.0319 11.3435 68.8043C11.2932 68.5767 11.4421 68.3525 11.6761 68.3036L16.7835 67.237C17.0175 67.1881 17.248 67.333 17.2982 67.5606Z"
            fill="#09257F"
          />
          <path
            d="M49.4555 53.3518C49.5057 53.5794 49.3568 53.8035 49.1228 53.8524L44.0154 54.9191C43.7814 54.968 43.551 54.8231 43.5007 54.5955C43.4505 54.3679 43.5994 54.1437 43.8334 54.0948L48.9407 53.0282C49.175 52.9793 49.4052 53.1242 49.4555 53.3518Z"
            fill="#09257F"
          />
          <path
            d="M22.3332 41.2027C22.5506 41.1054 22.808 41.1976 22.908 41.4091L25.0932 46.0246C25.1932 46.2361 25.0981 46.4864 24.8809 46.5837C24.6635 46.681 24.4062 46.5884 24.3062 46.3772L22.121 41.7618C22.0207 41.5505 22.1158 41.3002 22.3332 41.2027Z"
            fill="#09257F"
          />
          <path
            d="M11.7496 58.1356C11.7839 57.9051 12.004 57.7454 12.2407 57.779L17.4103 58.5083C17.6473 58.5416 17.8114 58.7557 17.7769 58.986C17.7427 59.2165 17.5226 59.3761 17.2859 59.3426L12.1162 58.613C11.8795 58.5799 11.7154 58.3661 11.7496 58.1356Z"
            fill="#09257F"
          />
          <path
            d="M33.8627 41.2542C33.6271 41.2135 33.47 40.9946 33.5119 40.7654L34.4263 35.7624C34.4682 35.5333 34.6932 35.3805 34.9288 35.4212C35.1644 35.4619 35.3215 35.6808 35.2797 35.91L34.3652 40.9129C34.3233 41.1421 34.0983 41.2949 33.8627 41.2542Z"
            fill="#09257F"
          />
          <path
            opacity="0.15"
            d="M13.7703 46.3146L14.4997 48.599L25.7754 41.7105L29.9678 47.8007C29.9678 47.8007 28.7163 51.6173 28.9666 52.4085L37.2889 48.3276C37.2889 48.3276 35.7412 45.2596 34.348 45.0008L33.1995 35.4264L40.4815 35.9734V35.3276L43.0993 32.9242L47.3866 33.1132C45.9245 32.2538 44.3418 31.6149 42.6509 31.2313C42.4112 31.1771 42.1713 31.13 41.931 31.0867L37.6066 30.2181C37.3438 30.1446 37.0791 30.075 36.8109 30.014C36.2679 29.8908 35.723 29.7972 35.1771 29.7298L35.1665 29.7277V29.7285C26.2257 28.6312 17.0012 34.9102 11.406 45.1477L13.7703 46.3146Z"
            fill="#ED3193"
          />
          <path
            d="M159.991 93.0682H123.496C121.67 93.0682 120.189 91.6281 120.189 89.8517V86.8611C120.189 85.0847 121.67 83.6446 123.496 83.6446H159.991L159.991 93.0682Z"
            fill="#914017"
          />
          <path
            d="M160.194 83.6449H141.306V93.0683H160.194V83.6449Z"
            fill="#AF5228"
          />
          <path
            d="M160.194 85.1432H124.202V91.1782H160.194V85.1432Z"
            fill="#C2B8CC"
          />
          <path
            d="M160.194 85.1432H141.225V91.1782H160.194V85.1432Z"
            fill="#D5CAE0"
          />
          <path
            d="M154.045 83.7398H117.549C115.723 83.7398 114.243 82.2997 114.243 80.5233V77.4764C114.243 75.7 115.723 74.2599 117.549 74.2599H154.045V83.7398Z"
            fill="url(#paint7_linear_121_1070)"
          />
          <path
            d="M154.247 74.2599H135.36V83.7398H154.247V74.2599Z"
            fill="#D34F97"
          />
          <path
            d="M154.248 75.7672H118.256V81.8384H154.248V75.7672Z"
            fill="#C2B8CC"
          />
          <path
            d="M154.247 75.7672H135.279V81.8384H154.247V75.7672Z"
            fill="#D5CAE0"
          />
          <path
            d="M145.373 0H126.876L122.364 30.1581H147.217L150.139 4.51052L145.373 0Z"
            fill="url(#paint8_linear_121_1070)"
          />
          <path
            d="M124.205 28.2567H145.373L145.84 24.9907H124.666L124.205 28.2567Z"
            fill="white"
          />
          <path
            d="M124.765 24.0382H145.933L146.399 20.7722H125.226L124.765 24.0382Z"
            fill="white"
          />
          <path
            d="M125.324 19.6837H146.493L146.959 16.4177H125.786L125.324 19.6837Z"
            fill="white"
          />
          <path
            d="M125.884 15.465H147.052L147.518 12.199H126.345L125.884 15.465Z"
            fill="white"
          />
          <path
            d="M126.647 11.292H147.815L148.281 8.02603H127.108L126.647 11.292Z"
            fill="white"
          />
          <path
            d="M145.373 -3.05176e-05L144.814 5.46055L150.139 4.51049L145.373 -3.05176e-05Z"
            fill="#3F1FA3"
          />
          <path
            d="M145.374 -3.05176e-05L150.14 4.51049L144.316 4.79519L145.374 -3.05176e-05Z"
            fill="#6B45C9"
          />
          <defs>
            <linearGradient
              id="paint0_linear_121_1070"
              x1="120.968"
              y1="-32.3197"
              x2="65.9334"
              y2="-4.86422"
              gradientUnits="userSpaceOnUse">
              <stop stop-color="#FF3E01" />
              <stop offset="1" stop-color="#AC0FC6" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_121_1070"
              x1="86.8942"
              y1="2.43021"
              x2="82.5662"
              y2="29.7772"
              gradientUnits="userSpaceOnUse">
              <stop stop-color="#FF3E01" />
              <stop offset="1" stop-color="#AC0FC6" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_121_1070"
              x1="79.0413"
              y1="33.2863"
              x2="75.9741"
              y2="47.6398"
              gradientUnits="userSpaceOnUse">
              <stop stop-color="#FCB17C" />
              <stop offset="1" stop-color="#F47294" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_121_1070"
              x1="100.165"
              y1="34.6469"
              x2="97.0974"
              y2="49.0004"
              gradientUnits="userSpaceOnUse">
              <stop stop-color="#FCB17C" />
              <stop offset="1" stop-color="#F47294" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_121_1070"
              x1="72.3171"
              y1="54.7416"
              x2="69.2498"
              y2="69.0955"
              gradientUnits="userSpaceOnUse">
              <stop stop-color="#FCB17C" />
              <stop offset="1" stop-color="#F47294" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_121_1070"
              x1="36.4288"
              y1="-4.00677"
              x2="-16.3392"
              y2="56.5428"
              gradientUnits="userSpaceOnUse">
              <stop stop-color="#FF3E01" />
              <stop offset="1" stop-color="#AC0FC6" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_121_1070"
              x1="7.36375"
              y1="55.7183"
              x2="72.7477"
              y2="91.131"
              gradientUnits="userSpaceOnUse">
              <stop stop-color="#FCB17C" />
              <stop offset="1" stop-color="#F47294" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_121_1070"
              x1="135.12"
              y1="69.2113"
              x2="132.742"
              y2="84.7921"
              gradientUnits="userSpaceOnUse">
              <stop stop-color="#FF3E01" />
              <stop offset="1" stop-color="#AC0FC6" />
            </linearGradient>
            <linearGradient
              id="paint8_linear_121_1070"
              x1="136.933"
              y1="-16.0608"
              x2="113.155"
              y2="18.1179"
              gradientUnits="userSpaceOnUse">
              <stop stop-color="#FF3E01" />
              <stop offset="1" stop-color="#AC0FC6" />
            </linearGradient>
          </defs>
        </svg>
      </View>
    </View>
  );
}
