// ================================================
// SDG WIDGET - JAVASCRIPT
// Widget interactif pour les infographies ODD
// ================================================

(function() {
    'use strict';
    
    // Elements
    const sdgToggle = document.getElementById('sdgToggle');
    const sdgPanel = document.getElementById('sdgPanel');
    const widgetClose = document.getElementById('widgetClose');
    const widgetTabs = document.querySelectorAll('.widget-tab');
    const tabContents = document.querySelectorAll('.widget-tab-content');
    
    // Toggle panel
    function togglePanel() {
        sdgPanel.classList.toggle('active');
        
        // Animate progress bars when panel opens
        if (sdgPanel.classList.contains('active')) {
            setTimeout(() => {
                animateProgressBars();
            }, 400);
        }
    }
    
    // Close panel
    function closePanel() {
        sdgPanel.classList.remove('active');
    }
    
    // Switch tabs
    function switchTab(tabName) {
        // Remove active class from all tabs
        widgetTabs.forEach(tab => tab.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked tab
        const clickedTab = document.querySelector(`[data-tab="${tabName}"]`);
        const targetContent = document.getElementById(`tab-${tabName}`);
        
        if (clickedTab && targetContent) {
            clickedTab.classList.add('active');
            targetContent.classList.add('active');
            
            // Re-animate progress bars if switching to global tab
            if (tabName === 'global') {
                setTimeout(() => {
                    animateProgressBars();
                }, 100);
            }
        }
    }
    
    // Animate progress bars
    function animateProgressBars() {
        const progressBars = document.querySelectorAll('.widget-progress-fill');
        progressBars.forEach(bar => {
            const targetWidth = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = targetWidth;
            }, 100);
        });
    }
    
    // Event Listeners
    if (sdgToggle) {
        sdgToggle.addEventListener('click', togglePanel);
    }
    
    if (widgetClose) {
        widgetClose.addEventListener('click', closePanel);
    }
    
    widgetTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            switchTab(tabName);
        });
    });
    
    // Close panel when clicking outside
    document.addEventListener('click', function(event) {
        const widget = document.getElementById('sdgWidget');
        if (widget && !widget.contains(event.target)) {
            closePanel();
        }
    });
    
    // Prevent closing when clicking inside panel
    if (sdgPanel) {
        sdgPanel.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    }
    
    // Keyboard accessibility
    document.addEventListener('keydown', function(event) {
        // Close with Escape key
        if (event.key === 'Escape') {
            closePanel();
        }
    });
    
    // Auto-show widget on first visit (optional)
    function autoShowWidget() {
        const hasSeenWidget = localStorage.getItem('sdg-widget-seen');
        
        if (!hasSeenWidget) {
            setTimeout(() => {
                // Add a subtle bounce animation
                if (sdgToggle) {
                    sdgToggle.style.animation = 'pulse 0.6s ease 3';
                }
                
                // Mark as seen
                localStorage.setItem('sdg-widget-seen', 'true');
            }, 3000); // Show after 3 seconds
        }
    }
    
    // Initialize
    function init() {
        console.log('ðŸ“Š SDG Widget initialized');
        autoShowWidget();
    }
    
    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // Expose API for external control (optional)
    window.SDGWidget = {
        open: function() {
            if (sdgPanel && !sdgPanel.classList.contains('active')) {
                togglePanel();
            }
        },
        close: closePanel,
        switchTab: switchTab,
        version: '1.0.0'
    };
    
})();

// ================================================
// ANALYTICS TRACKING (Optional)
// ================================================

function trackWidgetInteraction(action, label) {
    // Google Analytics (if installed)
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': 'SDG Widget',
            'event_label': label
        });
    }
    
    // Console log for debugging
    console.log(`SDG Widget: ${action} - ${label}`);
}

// Track when widget is opened
const sdgToggleBtn = document.getElementById('sdgToggle');
if (sdgToggleBtn) {
    sdgToggleBtn.addEventListener('click', function() {
        trackWidgetInteraction('click', 'Widget Opened');
    });
}

// Track tab switches
document.querySelectorAll('.widget-tab').forEach(tab => {
    tab.addEventListener('click', function() {
        const tabName = this.getAttribute('data-tab');
        trackWidgetInteraction('tab_switch', `Tab: ${tabName}`);
    });
});

// Track CTA clicks
document.querySelectorAll('.widget-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        trackWidgetInteraction('click', 'View Full Infographics');
    });
});
