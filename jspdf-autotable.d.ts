import "jspdf";

declare module "jspdf" {
  interface jsPDF {
    autoTable: (options: AutoTableOptions) => { finalY: number };
  }

  interface AutoTableOptions {
    head?: Array<any>;
    body: Array<any>;
    startY?: number;
    theme?: "striped" | "grid" | "plain";
    margin?: { top?: number; right?: number; bottom?: number; left?: number };
  }
}
