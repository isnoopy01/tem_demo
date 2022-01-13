const menu = [
  { heading: "Dashboard" },
  {
    icon: "bitcoin-cash",
    text: "Default Dashboard",
    link: "/",
  },
  {
    icon: "coins",
    text: "Invest Dashboard",
    link: "/invest",
  },
  {
    icon: "cc-alt2",
    text: "Sales Dashboard",
    link: "/sales",
  },
  {
    icon: "growth",
    text: "Analytics Dashboard",
    link: "/analytics",
  },
  {
    heading: "Pre-built Pages",
  },
  {
    icon: "tile-thumb",
    text: "Projects",
    active: false,
    subMenu: [
      {
        text: "Project Cards",
        link: "/project-card",
      },
      {
        text: "Project List",
        link: "/project-list",
      },
    ],
  },
  {
    icon: "users",
    text: "User Manage",
    active: false,
    subMenu: [
      {
        text: "User List - Regular",
        link: "/user-list-regular",
      },
      {
        text: "User List - Compact",
        link: "/user-list-compact",
      },
      {
        text: "User Details - Regular",
        link: "/user-details-regular/1",
      },
      {
        text: "User Profile - Regular",
        link: "/user-profile-regular",
      },
      {
        text: "User Contact - Card",
        link: "/user-contact-card",
      },
    ],
  },
  {
    icon: "file-docs",
    text: "AML / KYCs",
    active: false,
    subMenu: [
      {
        text: "KYC List - Regular",
        link: "/kyc-list-regular",
      },
      {
        text: "KYC Details - Regular",
        link: "/kyc-details-regular/UD01544",
      },
    ],
  },
  {
    icon: "tranx",
    text: "Transaction",
    active: false,
    subMenu: [
      {
        text: "Trans List - Basic",
        link: "/transaction-basic",
      },
      {
        text: "Trans List - Crypto",
        link: "/transaction-crypto",
      },
    ],
  },
  {
    icon: "grid-alt",
    text: "Applications",
    active: false,
    subMenu: [
      {
        text: "Messages",
        link: "/app-messages",
      },
      {
        text: "Chats / Messenger",
        link: "/app-chat",
      },
      {
        text: "Calendar",
        link: "/app-calender",
      },
    ],
  },
  {
    icon: "card-view",
    text: "Products",
    active: false,
    subMenu: [
      {
        text: "Product List",
        link: "/product-list",
      },
      {
        text: "Product Card",
        link: "/product-card",
      },
      {
        text: "Product Details",
        link: "/product-details/0",
      },
    ],
  },
  {
    icon: "file-docs",
    text: "Invoice",
    active: false,
    subMenu: [
      {
        text: "Invoice List",
        link: "/invoice-list",
      },
      {
        text: "Invoice Details",
        link: "/invoice-details/1",
      },
    ],
  },
  {
    icon: "view-col",
    text: "Pricing Table",
    link: "/pricing-table",
  },
  {
    icon: "img",
    text: "Image Gallery",
    link: "/image-gallery",
  },
  {
    heading: "Misc Pages",
  },
  {
    icon: "signin",
    text: "Auth Pages",
    active: false,
    subMenu: [
      {
        text: "Login / Signin",
        link: "/auth-login",
        newTab: true,
      },
      {
        text: "Register / Signup",
        link: "/auth-register",
        newTab: true,
      },
      {
        text: "Forgot Password",
        link: "/auth-reset",
        newTab: true,
      },
      {
        text: "Success / Confirm",
        link: "/auth-success",
        newTab: true,
      },
    ],
  },
  {
    icon: "files",
    text: "Error Pages",
    active: false,
    subMenu: [
      {
        text: "404 Classic",
        link: "/errors/404-classic",
        newTab: true,
      },
      {
        text: "504 Classic",
        link: "/errors/504-classic",
        newTab: true,
      },
      {
        text: "404 Modern",
        link: "/errors/404-modern",
        newTab: true,
      },
      {
        text: "504 Modern",
        link: "/errors/504-modern",
        newTab: true,
      },
    ],
  },
  {
    icon: "files",
    text: "Other Pages",
    active: false,
    subMenu: [
      {
        text: "Blank / Startup",
        link: "/_blank",
      },
      {
        text: "Faqs / Help",
        link: "/pages/faq",
      },
      {
        text: "Terms / Policy",
        link: "/pages/terms-policy",
      },
      {
        text: "Regular Page - v1",
        link: "/pages/regular-v1",
      },
      {
        text: "Regular Page - v2",
        link: "/pages/regular-v2",
      },
    ],
  },
  {
    heading: "Components",
  },
  {
    icon: "layers",
    text: "Ui Elements",
    active: false,
    subMenu: [
      {
        text: "Alerts",
        link: "/components/alerts",
      },
      {
        text: "Accordions",
        link: "/components/accordions",
      },
      {
        text: "Badges",
        link: "/components/badges",
      },
      {
        text: "Buttons",
        link: "/components/buttons",
      },
      {
        text: "Button Group",
        link: "/components/button-group",
      },
      {
        text: "Breadcrumbs",
        link: "/components/breadcrumbs",
      },
      {
        text: "Cards",
        link: "/components/cards",
      },
      {
        text: "Carousel",
        link: "/components/carousel",
      },
      {
        text: "Dropdowns",
        link: "/components/dropdowns",
      },
      {
        text: "Modals",
        link: "/components/modals",
      },
      {
        text: "Pagination",
        link: "/components/pagination",
      },
      {
        text: "Popovers",
        link: "/components/popovers",
      },
      {
        text: "Progress",
        link: "/components/progress",
      },
      {
        text: "Spinner",
        link: "/components/spinner",
      },
      {
        text: "Tabs",
        link: "/components/tabs",
      },
      {
        text: "Toast",
        link: "/components/toast",
      },
      {
        text: "Tooltips",
        link: "/components/tooltips",
      },
      {
        text: "Utilities",
        active: false,
        subMenu: [
          {
            text: "Borders",
            link: "/components/util-border",
          },
          {
            text: "Colors",
            link: "/components/util-colors",
          },
          {
            text: "Display",
            link: "/components/util-display",
          },
          {
            text: "Embeded",
            link: "/components/util-embeded",
          },
          {
            text: "Flex",
            link: "/components/util-flex",
          },
          {
            text: "Text",
            link: "/components/util-text",
          },
          {
            text: "Sizing",
            link: "/components/util-sizing",
          },
          {
            text: "Spacing",
            link: "/components/util-spacing",
          },
          {
            text: "Others",
            link: "/components/util-others",
          },
        ],
      },
    ],
  },
  {
    icon: "dot-box",
    text: "Crafted Icons",
    active: false,
    subMenu: [
      {
        text: "SVG Icon-Exclusive",
        link: "/svg-icons",
      },
      {
        text: "Nioicon - HandCrafted",
        link: "/nioicon",
      },
    ],
  },
  {
    icon: "table-view",
    text: "Tables",
    active: false,
    subMenu: [
      {
        text: "Basic Tables",
        link: "/table-basic",
      },
      {
        text: "Special Tables",
        link: "/table-special",
      },
    ],
  },
  {
    icon: "card-view",
    text: "Forms",
    active: false,
    subMenu: [
      {
        text: "Form Elements",
        link: "/components/form-elements",
      },
      {
        text: "Form Layouts",
        link: "/components/form-layouts",
      },
      {
        text: "Form Validation",
        link: "/components/form-validation",
      },
      {
        text: "Date Time Picker",
        link: "/components/datetime-picker",
      },
    ],
  },
  {
    icon: "pie",
    text: "Charts",
    active: false,
    subMenu: [
      {
        text: "Chart Js",
        link: "/charts/chartjs",
      },
    ],
  },
  {
    icon: "text-rich",
    text: "Email Template",
    link: "/email-template",
    active: "false",
  },
];
export default menu;
