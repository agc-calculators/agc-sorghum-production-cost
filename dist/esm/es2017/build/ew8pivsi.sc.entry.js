/*! Built with http://stenciljs.com */
import { h } from '../agc-sorghum-production-cost.core.js';

class AgcSorghumProductionCostResultsPlaceholder {
    render() {
        const placeholder = () => (h("span", null,
            h("i", { class: "mark" }),
            " ",
            h("i", { class: "mark" }),
            " ",
            h("i", { class: "mark" }),
            " ",
            h("i", { class: "mark" })));
        return (h("section", null,
            h("ul", { class: "agc-results-placeholder" },
                h("li", null,
                    h("h2", { "data-i18n": "results.total-income" }, "Gross Revenue per Acre"),
                    placeholder()),
                h("li", null,
                    h("h2", { "data-i18n": "results.net-income-per-acre" }, "Net Income per Acre"),
                    placeholder()),
                h("li", null,
                    h("h2", { "data-i18n": "results.net-income-total" }, "Net Income Total"),
                    placeholder()))));
    }
    static get is() { return "agc-sorghum-production-cost-results-placeholder"; }
}

export { AgcSorghumProductionCostResultsPlaceholder };
