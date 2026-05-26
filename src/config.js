export const APP_CONFIG = {
    SUPABASE_URL: 'https://kvtdelsdifkerfepvkvn.supabase.co',
    SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2dGRlbHNkaWZrZXJmZXB2a3ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk2OTE0MjUsImV4cCI6MjA5NTI2NzQyNX0.CAZXKUsP47fDiVxiH830Z3nXCFRb4m6XLtP-KX5bE5o',
    PAYMENT_RECEIVER: '0x69142E445C25e4619f49E0DCEac86300f146B624',
    PIXEL_PRICE_ETH: '0.001',
    GRID_SIZE: 1000,
    CELL_SIZE: 10,
    PIXELS_TABLE: 'pixels',
    BASE_CHAIN_ID: '0x2105',
    BASE_CHAIN_INFO: {
        chainId: '0x2105',
        chainName: 'Base Mainnet',
        nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
        rpcUrls: ['https://base.org'],
        blockExplorerUrls: ['https://basescan.org'],
    },
    ALLOWED_LINK_PROTOCOLS: ['https:', 'http:'],
    ALLOWED_IMAGE_EXTENSIONS: ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg'],
};
