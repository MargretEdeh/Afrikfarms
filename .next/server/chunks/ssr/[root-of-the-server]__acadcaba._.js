module.exports = [
"[project]/.next-internal/server/app/admin/dashboard/revenue/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/admin/dashboard/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/admin/dashboard/layout.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/lib/apiClient.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/apiClient.ts
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-rsc] (ecmascript)");
;
const apiClient = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: ("TURBOPACK compile-time value", "https://backend-api.afrikfarm.com/api/v1"),
    headers: {
        'Content-Type': 'application/json'
    }
});
apiClient.interceptors.request.use((config)=>{
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
const __TURBOPACK__default__export__ = apiClient;
}),
"[project]/services/admin.service.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminService",
    ()=>AdminService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/apiClient.ts [app-rsc] (ecmascript)");
;
const AdminService = {
    // Get Admin dashboard data
    getDashboard: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].get("/admin/dashboard");
        return response.data;
    },
    // Create a new farmer
    createFarmer: async (data)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].post("/admin/create-farmer", data);
        return response.data;
    },
    // Get all farmers
    getFarmers: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].get("/admin/farmer/list-farmers");
        return response.data;
    },
    // Get a single farmer by ID
    getFarmerById: async (id)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].get(`/admin/farmer/get-farmer?farmer_id=${id}`);
        return response.data;
    },
    // Send verification code to phone number
    sendCode: async (data)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].post("/admin/send-code", data);
        return response.data;
    },
    // Verify code sent to phone number
    verifyCode: async (data)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].post("/admin/verify-code", data);
        return response.data;
    },
    verifyNin: async (data)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].post("/admin/verify-nin", data);
        return response.data;
    },
    uploadProfileImage: async (data)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].post("/admin/upload-profile-image", data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    },
    UploadProofOfAddress: async (data)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].post("/admin/upload-proof-of-address", data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    },
    getBanks: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].get("/banks");
        return response.data;
    },
    updateFarmer: async (id, data)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].put(`/admin/farmer/update-farmer?id=${id}`, data);
        return response.data;
    },
    deleteFarmer: async (id)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].delete(`/admin/farmers/${id}`);
        return response.data;
    },
    // Farm endpoints 
    getFarms: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].get("/admin/farm/list-farms");
        return response.data;
    },
    createFarm: async (data)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].post("/admin/farm/create-farm", data);
        return response.data;
    },
    deleteFarm: async (id)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].delete(`/admin/delete-farm?farm_id=${id}`);
        return response.data;
    },
    updateFarm: async (id, data)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].put(`/admin/farm/update-farm?farm_id=${id}`, data);
        return response.data;
    },
    getFarmById: async (id)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].get(`/admin/get-farm?farm_id=${id}`);
        return response.data;
    },
    getFarmersFarms: async (id)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].get(`/admin/farmers-farms?farmer_id=${id}`);
        return response.data;
    },
    // Payment endpoints
    initializePayment: async (data)=>{
        console.log("=== PAYMENT INITIALIZATION DEBUG ===");
        console.log("1. Data received by service:", data);
        console.log("2. Data stringified:", JSON.stringify(data));
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].post("/admin/initialize-payment", data);
            console.log("3. Full response received:", response);
            console.log("4. Response data:", response.data);
            // Return the full response data
            // The structure is likely: response.data contains { data: { authorization_url, reference }, message, status }
            return response.data;
        } catch (error) {
            console.error("4. Error caught in service:", error);
            console.error("5. Error response data:", error.response?.data);
            console.error("6. Error request data:", error.config?.data);
            throw error;
        }
    },
    verifyPayment: async (trxref, reference)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].get(`/admin/verify-payment?trxref=${trxref}&reference=${reference}`);
        return response.data;
    },
    // Additional payment endpoints
    getPaymentRevenue: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].get("/admin/payment/revenue");
        return response.data;
    },
    listPayments: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$apiClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].get("/admin/payment/list-payments");
        return response.data;
    }
};
}),
"[project]/app/admin/dashboard/revenue/_component/PaymentRevenuePage.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/admin/dashboard/revenue/_component/PaymentRevenuePage.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/admin/dashboard/revenue/_component/PaymentRevenuePage.tsx <module evaluation>", "default");
}),
"[project]/app/admin/dashboard/revenue/_component/PaymentRevenuePage.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/admin/dashboard/revenue/_component/PaymentRevenuePage.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/admin/dashboard/revenue/_component/PaymentRevenuePage.tsx", "default");
}),
"[project]/app/admin/dashboard/revenue/_component/PaymentRevenuePage.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$dashboard$2f$revenue$2f$_component$2f$PaymentRevenuePage$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/admin/dashboard/revenue/_component/PaymentRevenuePage.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$dashboard$2f$revenue$2f$_component$2f$PaymentRevenuePage$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/app/admin/dashboard/revenue/_component/PaymentRevenuePage.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$dashboard$2f$revenue$2f$_component$2f$PaymentRevenuePage$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/admin/dashboard/revenue/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RevenueDashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$admin$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/admin.service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$dashboard$2f$revenue$2f$_component$2f$PaymentRevenuePage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/admin/dashboard/revenue/_component/PaymentRevenuePage.tsx [app-rsc] (ecmascript)");
'use client"';
;
;
;
function RevenueDashboardPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-4",
                children: "Revenue Dashboard"
            }, void 0, false, {
                fileName: "[project]/app/admin/dashboard/revenue/page.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$dashboard$2f$revenue$2f$_component$2f$PaymentRevenuePage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                getPaymentRevenue: __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$admin$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AdminService"].getPaymentRevenue,
                listPayments: __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$admin$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AdminService"].listPayments
            }, void 0, false, {
                fileName: "[project]/app/admin/dashboard/revenue/page.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/dashboard/revenue/page.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/admin/dashboard/revenue/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/admin/dashboard/revenue/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__acadcaba._.js.map