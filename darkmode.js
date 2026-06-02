(function () {
    const isDark = localStorage.getItem('darkMode') === 'true';

    // Apply class to <html> immediately — no flash, works before DOM is ready
    if (isDark) {
        document.documentElement.classList.add('dark-mode');
    }

    document.addEventListener('DOMContentLoaded', function () {
        const toggle = document.getElementById('dark-toggle');
        if (!toggle) return;

        // Sync checkbox to saved state
        toggle.checked = isDark;

        // Save + apply on toggle
        toggle.addEventListener('change', function () {
            localStorage.setItem('darkMode', toggle.checked ? 'true' : 'false');
            if (toggle.checked) {
                document.documentElement.classList.add('dark-mode');
            } else {
                document.documentElement.classList.remove('dark-mode');
            }
        });
    });
})();
