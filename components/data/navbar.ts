export interface navlink {
    id: number,
    tag: string,
    url: string
}


const navLinks: navlink[] = [
    { id: 1, tag: "Home", url: "/" },
    { id: 2, tag: "Find Job", url: "#/" },
    { id: 3, tag: "Employers", url: "#../Newsletter" },
    { id: 4, tag: "Candidates", url: "#../Newsletter" },
    { id: 5, tag: "Pricing Plans", url: "#../Projects" },
    { id: 6, tag: "Customer Support", url: "#../Projects" }
  ];
  
  export default navLinks;