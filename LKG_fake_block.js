// By datlocket 🤭

const goldData = {
  request_date_ms: Date.now(),
  request_date: new Date().toISOString(),
  subscriber: {
    entitlements: {
      gold: {
        expires_date: "2099-12-31T23:59:59Z",
        purchase_date: "2024-01-01T00:00:00Z",
        product_identifier: "locket_gold_lifetime"
      }
    },
    original_purchase_date: "2024-01-01T00:00:00Z",
    original_app_user_id: "$RCAnonymousID:datlocket",
    last_seen: new Date().toISOString(),
    management_url: null,
    subscriptions: {
      locket_gold_lifetime: {
        billing_issues_detected_at: null,
        expires_date: "2099-12-31T23:59:59Z",
        is_sandbox: false,
        original_purchase_date: "2024-01-01T00:00:00Z",
        ownership_type: "PURCHASED",
        period_type: "normal",
        purchase_date: "2024-01-01T00:00:00Z",
        store: "app_store",
        unsubscribe_detected_at: null
      }
    }
  }
};

$done({ body: JSON.stringify(goldData) });
